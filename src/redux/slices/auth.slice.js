import { ACCESS_TYPE, NOTIFICATION_MESSAGE } from "@constants/constant";
import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "@services/auth.service";
import { message } from "antd";

const initialState = {
  loginError: null,
  loading: false,
  idToken: null,
  credentials: null,
  user_role: null,
  userType: null,
  userAllowedModules: null,
  userAllowedModulesSorted: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthStore: (state) => {
      state.loginError = null;
      state.loading = false;
      state.idToken = null;
      state.credentials = null;
      state.user_role = null;
      state.userType = null;
      state.userAllowedModules = null;
      state.userAllowedModulesSorted = null;
    },
    logout: (state) => {
      state.idToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      message.error(
        action?.payload?.message ||
          action?.error?.message ||
          NOTIFICATION_MESSAGE.SOMETHING_WRONG
      );
      state.loading = false;
      state.loginError = action.payload;
      state.loading = false;
      state.idToken = null;
      state.credentials = null;
      state.user_role = null;
      state.userType = null;
      state.userAllowedModules = null;
      state.userAllowedModulesSorted = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      let response = action.payload;
      let newResponse = action.payload.data;
      if (response.status >= 200 && response.status < 300) {
        let cnt = 0;

        if (newResponse.userDTO && newResponse.userDTO.role) {
          newResponse.userDTO.role.map((e) => {
            if (e.roleName === ACCESS_TYPE.HOMEPAGE_CATEGORY) {
              cnt++;
            }
          });
        }

        if (cnt > 0) {
          let userAllowedModules = [];
          if (newResponse.userDTO.userRolePermissionMap.HOMEPAGE_CATEGORY) {
            newResponse.permissionDetailList.map((e) => {
              newResponse.userDTO.userRolePermissionMap.HOMEPAGE_CATEGORY.map(
                (f) => {
                  if (f.permissionsId == e.permissionsId) {
                    let temp = { ...e, ...f };
                    userAllowedModules.push(temp);
                  }
                }
              );
            });
          }

          let userAllowedModulesSorted = [];
          let tempArrayId = [];
          userAllowedModules.map((e) => {
            if (!tempArrayId.includes(e.moduleName)) {
              tempArrayId.push(e.moduleName);
              let temp = {};
              temp["moduleName"] = e.moduleName;
              temp["children"] = [];
              let tempArr = [];
              userAllowedModules.map((f) => {
                if (
                  f.moduleName === e.moduleName &&
                  !tempArr.includes(f.permissionsId)
                ) {
                  temp["children"].push(f);
                  tempArr.push(f.permissionsId);
                }
              });
              userAllowedModulesSorted.push(temp);
            }
          });

          state.idToken = response.data.data.access_token;
          state.credentials = response;
          state.loginError = null;
          state.user_role = response.role;
          state.userType = response.userType;
          state.userAllowedModules = response.userAllowedModules;
          state.userAllowedModulesSorted = response.userAllowedModulesSorted;
          state.loading = false;
        } else {
          message.error(ACCESS_TYPE.NO_ACCESS);
        }
      } else {
        state.loginError = response.statusText;
      }
    });
  },
});

export const { resetAuthStore, logout } = authReducer.actions;
export default authReducer.reducer;
