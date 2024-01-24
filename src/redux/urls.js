import { ENV_VARIABLES } from "@constants/constant";

let BaseUrl = "https://nalp.tmmumbai.in/";
let BaseUrlNew = "https://nalp.tmmumbai.in/";
let ImageUrl = "https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com/";
let ElasticSearchUrl =
  "https://search-tm-prod-es-fk6ngihhkktmll4mo2h4xyyw4u.ap-south-1.es.amazonaws.com";
let BaseMumUrl = "https://nalp.tmmumbai.in/";
let BaseDelUrl = "https://nalp.tmmumbai.in/";
let BaseKolUrl = "https://nalp.tmmumbai.in/";
let BaseBlrUrl = "https://nalp.tmmumbai.in/";
let BaseLkoUrl = "https://nalp.tmmumbai.in/";

let ReportService = "https://reports.tmmumbai.in";
const ReportsService = "ReportsService";
const PharmacistService = "PharmacistService";
const OrderManagementService = "OrderManagementService";
const DoctorService = "DoctorService";
const AdminService = "AdminService";
const ThirdPartyService = "ThirdPartyService";
const CustomerService = "CustomerService";
const CsrService = "CsrService";
const OauthService_URL_var = "OauthService";
const getOpenOrClosedBulkPurchaseOrder = "getOpenOrClosedBulkPurchaseOrder";
const closePo = "closePo";
const closeLineItemsForPo = "closeLineItemsForPo";
const getBulkPoDetails = "getBulkPoDetails";
const addOrUpdateBulkPoLineItem = "addOrUpdateBulkPoLineItem";
let warehouseServiceUrl = "WarehouseBangaloreService";

let currentEnv = import.meta.env.VITE_APP_CURRENT_ENVIRONMENT;
if (!currentEnv) {
  currentEnv = 2;
}
switch (Number(currentEnv)) {
  case ENV_VARIABLES.PRODUCTION:
    BaseUrl = "https://nalp.tmmumbai.in/";
    BaseUrlNew = "https://nalp.tmmumbai.in/";
    ImageUrl = "https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com/";
    ElasticSearchUrl =
      "https://search-tm-prod-es-fk6ngihhkktmll4mo2h4xyyw4u.ap-south-1.es.amazonaws.com";
    BaseMumUrl = "https://nalp.tmmumbai.in/";
    BaseDelUrl = "https://nalp.tmmumbai.in/";
    BaseKolUrl = "https://nalp.tmmumbai.in/";
    BaseBlrUrl = "https://nalp.tmmumbai.in/";
    BaseLkoUrl = "https://nalp.tmmumbai.in/";
    ReportService = "https://reports.tmmumbai.in";
    break;
  case ENV_VARIABLES.STAGE:
    BaseUrl = "https://stage-services.truemeds.in/";
    BaseUrlNew = "https://stage-services.truemeds.in/";
    ImageUrl = "https://tm-storage-bucket-stage.s3.ap-south-1.amazonaws.com/";
    ElasticSearchUrl =
      "https://search-tm-stage-es-nnmfrbwdug6zoksvm6pkvbz7ga.ap-south-1.es.amazonaws.com";
    BaseMumUrl = "https://stage-services.truemeds.in/";
    BaseDelUrl = "https://stage-services.truemeds.in/";
    BaseKolUrl = "https://stage-services.truemeds.in/";
    BaseBlrUrl = "https://stage-services.truemeds.in/";
    BaseLkoUrl = "https://stage-services.truemeds.in/";
    ReportService = "https://stage-services.truemeds.in/" + ReportsService;
    break;
  case ENV_VARIABLES.UAT:
    BaseUrl = "https://uat-services.truemeds.in/";
    BaseUrlNew = "https://uat-services.truemeds.in/";
    ImageUrl = "https://tm-storage-bucket-uat.s3.ap-south-1.amazonaws.com/";
    ElasticSearchUrl =
      "https://search-tm-uat-es-leogrdupczbaam4y3vupjxctti.ap-south-1.es.amazonaws.com";
    BaseMumUrl = "https://uat-services.truemeds.in/";
    BaseDelUrl = "https://uat-services.truemeds.in/";
    BaseKolUrl = "https://uat-services.truemeds.in/";
    BaseBlrUrl = "https://uat-services.truemeds.in/";
    BaseLkoUrl = "https://uat-services.truemeds.in/";
    ReportService = "https://uat-services.truemeds.in/" + ReportsService;
    break;
  case ENV_VARIABLES.STAGE_MUM:
    BaseUrl = "https://stage-mum.truemedsapi.in/";
    BaseUrlNew = "https://stage-mum.truemedsapi.in/";
    ImageUrl = "https://tm-storage-bucket-stage.s3.ap-south-1.amazonaws.com/";
    ElasticSearchUrl =
      "https://search-tm-stage-es-nnmfrbwdug6zoksvm6pkvbz7ga.ap-south-1.es.amazonaws.com";
    BaseMumUrl = "https://stage-mum.truemedsapi.in/";
    BaseDelUrl = "https://stage-mum.truemedsapi.in/";
    BaseKolUrl = "https://stage-mum.truemedsapi.in/";
    BaseBlrUrl = "https://stage-mum.truemedsapi.in/";
    BaseLkoUrl = "https://stage-mum.truemedsapi.in/";
    ReportService = "https://stage-mum.truemedsapi.in/" + ReportsService;
    break;
  default:
    break;
}
//Old Algo urls
export const PharmacistService_URL = `${BaseUrl}${PharmacistService}`;
export const OrderManagementService_URL = `${BaseUrl}${OrderManagementService}`;
export const DoctorService_URL = `${BaseUrl}${DoctorService}`;
export const AdminService_URL = `${BaseUrl}${AdminService}`;
export const ThirdPartyService_URL = `${BaseUrl}${ThirdPartyService}`;
export const CustomerService_URL = `${BaseUrl}${CustomerService}`;
export const CsrService_URL = `${BaseUrl}${CsrService}`;
export const IMAGE_URL = `${ImageUrl}`;
export const ElasticSearch_URL = `${ElasticSearchUrl}`;
export const ReportService_URL = `${ReportService}`;
export const OauthService_URL = `${BaseUrl}${OauthService_URL_var}`;
export const GetOpenOrClosedBulkPurchaseOrder_URL = `${AdminService_URL}/${getOpenOrClosedBulkPurchaseOrder}`;
export const ClosePO_URL = `${AdminService_URL}/${closePo}`;
export const CloseLineItemsForPo_URL = `${AdminService_URL}/${closeLineItemsForPo}`;
export const GetBulkPoDetails_URL = `${AdminService_URL}/${getBulkPoDetails}`;
export const AddOrUpdateBulkPoLineItem_URL = `${AdminService_URL}/${addOrUpdateBulkPoLineItem}`;

// new algo urls
export const OrderManagementService_NEW_URL = `${BaseUrlNew}${OrderManagementService}`;
export const DoctorService_NEW_URL = `${BaseUrlNew}${DoctorService}`;
export const AdminService_NEW_URL = `${BaseUrlNew}${AdminService}`;
export const ThirdPartyService_NEW_URL = `${BaseUrlNew}${ThirdPartyService}`;
export const CustomerService_NEW_URL = `${BaseUrlNew}${CustomerService}`;

//warehouse Level urls
export const ThirdPartyService_mum_URL = `${BaseMumUrl}${ThirdPartyService}`;
export const CustomerService_BLR_URL = `${BaseBlrUrl}${CustomerService}`;
export const CustomerService_MUM_URL = `${BaseMumUrl}${CustomerService}`;
export const CustomerService_DEL_URL = `${BaseDelUrl}${CustomerService}`;
export const CustomerService_KOL_URL = `${BaseKolUrl}${CustomerService}`;
export const CustomerService_LKO_URL = `${BaseLkoUrl}${CustomerService}`;

export const WarehouseMumbaiService_URL_var = BaseMumUrl + warehouseServiceUrl;
export const download_sample_url = {
  HOMEPAGE_CATEGORY:
    "https://tm-storage-bucket-stage.s3.ap-south-1.amazonaws.com/csv/HomePageCategoryMappingSample.csv",
  HOMEPAGE_CMT:
    "https://tm-storage-bucket-stage.s3.ap-south-1.amazonaws.com/csv/HomePageOtcMappingSample.csv",
  HOMEPAGE_PRODUCT:
    "https://tm-storage-bucket-stage.s3.ap-south-1.amazonaws.com/csv/TopDealsSampleCsv.csv",
};
