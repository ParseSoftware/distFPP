webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: 'pacificoCustom';\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + "); /* IE9 Compat Modes */\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('embedded-opentype'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('woff2'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('woff'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ")  format('truetype'), /* Safari, Android, iOS */ \r\n  }\r\n  @font-face {\r\n    font-family: 'latoCustom';\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + "); /* IE9 Compat Modes */\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('embedded-opentype'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('woff2'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('woff'), \r\n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ")  format('truetype'), /* Safari, Android, iOS */ \r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastr, viewContainerRef) {
        this.toastr = toastr;
        this.title = 'app';
        this.viewContainerRef = viewContainerRef;
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_header_header_component__ = __webpack_require__("../../../../../src/app/nav/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_footer_footer_component__ = __webpack_require__("../../../../../src/app/nav/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/nav/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_viewprofile_viewprofile_component__ = __webpack_require__("../../../../../src/app/home/viewprofile/viewprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_pet_pets_pets_component__ = __webpack_require__("../../../../../src/app/home/pet/pets/pets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_pet_pets_shared_pet_service__ = __webpack_require__("../../../../../src/app/home/pet/pets/shared/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_pet_new_pet_new_pet_component__ = __webpack_require__("../../../../../src/app/home/pet/new-pet/new-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_pet_new_pet_shared_new_pet_service__ = __webpack_require__("../../../../../src/app/home/pet/new-pet/shared/new-pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_pet_petdetail_petdetail_component__ = __webpack_require__("../../../../../src/app/home/pet/petdetail/petdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_pet_petdetail_shared_petdetail_service__ = __webpack_require__("../../../../../src/app/home/pet/petdetail/shared/petdetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_adoption_application_adoption_application_component__ = __webpack_require__("../../../../../src/app/home/adoption-application/adoption-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_forms_forms_component__ = __webpack_require__("../../../../../src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_wait_list_wait_list_component__ = __webpack_require__("../../../../../src/app/home/wait-list/wait-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_do_not_adopt_do_not_adopt_component__ = __webpack_require__("../../../../../src/app/home/do-not-adopt/do-not-adopt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_manage_people_manage_people_component__ = __webpack_require__("../../../../../src/app/home/manage-people/manage-people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_manage_people_shared_managepeople_service__ = __webpack_require__("../../../../../src/app/home/manage-people/shared/managepeople.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__contact_contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__contact_messages_messages_component__ = __webpack_require__("../../../../../src/app/contact/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__contact_template_email_template_email_template_component__ = __webpack_require__("../../../../../src/app/contact/template/email-template/email-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__contact_volunteer_opportunities_volunteer_opportunities_component__ = __webpack_require__("../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__tools_tools_tools_component__ = __webpack_require__("../../../../../src/app/tools/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tools_rescue_network_rescue_network_component__ = __webpack_require__("../../../../../src/app/tools/rescue-network/rescue-network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__tools_regional_breed_tracker_regional_breed_tracker_component__ = __webpack_require__("../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__tools_transport_transport_component__ = __webpack_require__("../../../../../src/app/tools/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__user_user_user_component__ = __webpack_require__("../../../../../src/app/user/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__user_user_shared_user_service__ = __webpack_require__("../../../../../src/app/user/user/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__user_newuser_newuser_component__ = __webpack_require__("../../../../../src/app/user/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__user_newuser_shared_newuser_service__ = __webpack_require__("../../../../../src/app/user/newuser/shared/newuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__user_userdetail_userdetail_component__ = __webpack_require__("../../../../../src/app/user/userdetail/userdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__user_userdetail_shared_userdetail_service__ = __webpack_require__("../../../../../src/app/user/userdetail/shared/userdetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__upload_new_upload_service_new_upload_service__ = __webpack_require__("../../../../../src/app/upload/new-upload/service/new-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__contact_template_new_template_new_template_component__ = __webpack_require__("../../../../../src/app/contact/template/new-template/new-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__contact_new_question_new_question_component__ = __webpack_require__("../../../../../src/app/contact/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__contact_question_template_question_template_component__ = __webpack_require__("../../../../../src/app/contact/question-template/question-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__contact_resume_message_resume_message_component__ = __webpack_require__("../../../../../src/app/contact/resume-message/resume-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tools_tracker_result_tracker_result_component__ = __webpack_require__("../../../../../src/app/tools/tracker-result/tracker-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__portal_volunteer_portal_volunteer_portal_component__ = __webpack_require__("../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__portal_portal_opportunities_portal_opportunities_component__ = __webpack_require__("../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__portal_portal_history_portal_history_component__ = __webpack_require__("../../../../../src/app/portal/portal-history/portal-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__portal_portal_hours_portal_hours_component__ = __webpack_require__("../../../../../src/app/portal/portal-hours/portal-hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__portal_portal_my_volunteer_portal_my_volunteer_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__portal_portal_my_messages_portal_my_messages_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__portal_portal_my_history_portal_my_history_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-history/portal-my-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__portal_portal_my_organizations_portal_my_organizations_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__upload_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__user_user_shared_user_filter_pipe__ = __webpack_require__("../../../../../src/app/user/user/shared/user-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__home_pet_pets_shared_pet_filter_pipe__ = __webpack_require__("../../../../../src/app/home/pet/pets/shared/pet-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__home_pet_pets_shared_pet_bar_filter_pipe__ = __webpack_require__("../../../../../src/app/home/pet/pets/shared/pet-bar-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__home_manage_people_shared_manager_filter_pipe__ = __webpack_require__("../../../../../src/app/home/manage-people/shared/manager-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//General Components




//Login & Register Components 


//Home Components














//Contact Components




//Tool Components




//Employee Component












//Volunteer Components 








//Socket Manager






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_28__contact_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_32__tools_tools_tools_component__["a" /* ToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__user_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__nav_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_pet_pets_pets_component__["a" /* PetsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_adoption_application_adoption_application_component__["a" /* AdoptionApplicationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_forms_forms_component__["a" /* FormsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_wait_list_wait_list_component__["a" /* WaitListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_do_not_adopt_do_not_adopt_component__["a" /* DoNotAdoptComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_manage_people_manage_people_component__["a" /* ManagePeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_29__contact_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__contact_template_email_template_email_template_component__["a" /* EmailTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_31__contact_volunteer_opportunities_volunteer_opportunities_component__["a" /* VolunteerOpportunitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_33__tools_rescue_network_rescue_network_component__["a" /* RescueNetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_34__tools_regional_breed_tracker_regional_breed_tracker_component__["a" /* RegionalBreedTrackerComponent */],
            __WEBPACK_IMPORTED_MODULE_35__tools_transport_transport_component__["a" /* TransportComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_pet_new_pet_new_pet_component__["a" /* NewPetComponent */],
            __WEBPACK_IMPORTED_MODULE_43__contact_template_new_template_new_template_component__["a" /* NewTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_44__contact_new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_45__contact_question_template_question_template_component__["a" /* QuestionTemplateComponent */],
            __WEBPACK_IMPORTED_MODULE_46__contact_resume_message_resume_message_component__["a" /* ResumeMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_47__tools_tracker_result_tracker_result_component__["a" /* TrackerResultComponent */],
            __WEBPACK_IMPORTED_MODULE_48__portal_volunteer_portal_volunteer_portal_component__["a" /* VolunteerPortalComponent */],
            __WEBPACK_IMPORTED_MODULE_49__portal_portal_opportunities_portal_opportunities_component__["a" /* PortalOpportunitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_50__portal_portal_history_portal_history_component__["a" /* PortalHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_51__portal_portal_hours_portal_hours_component__["a" /* PortalHoursComponent */],
            __WEBPACK_IMPORTED_MODULE_52__portal_portal_my_volunteer_portal_my_volunteer_component__["a" /* PortalMyVolunteerComponent */],
            __WEBPACK_IMPORTED_MODULE_53__portal_portal_my_messages_portal_my_messages_component__["a" /* PortalMyMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_54__portal_portal_my_history_portal_my_history_component__["a" /* PortalMyHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_55__portal_portal_my_organizations_portal_my_organizations_component__["a" /* PortalMyOrganizationsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_pet_petdetail_petdetail_component__["a" /* PetdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_38__user_newuser_newuser_component__["a" /* NewuserComponent */],
            __WEBPACK_IMPORTED_MODULE_40__user_userdetail_userdetail_component__["a" /* UserdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_viewprofile_viewprofile_component__["a" /* ViewprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_57__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_58__user_user_shared_user_filter_pipe__["a" /* UserFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_59__home_pet_pets_shared_pet_filter_pipe__["a" /* PetFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_60__home_pet_pets_shared_pet_bar_filter_pipe__["a" /* PetBarFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_61__home_manage_people_shared_manager_filter_pipe__["a" /* ManagerFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__app_router__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_progress_http__["b" /* ProgressHttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__home_pet_pets_shared_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_19__home_pet_new_pet_shared_new_pet_service__["a" /* NewPetService */],
            __WEBPACK_IMPORTED_MODULE_21__home_pet_petdetail_shared_petdetail_service__["a" /* PetdetailService */],
            __WEBPACK_IMPORTED_MODULE_37__user_user_shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_27__home_manage_people_shared_managepeople_service__["a" /* ManagepeopleService */],
            __WEBPACK_IMPORTED_MODULE_39__user_newuser_shared_newuser_service__["a" /* NewuserService */],
            __WEBPACK_IMPORTED_MODULE_41__user_userdetail_shared_userdetail_service__["a" /* UserdetailService */],
            __WEBPACK_IMPORTED_MODULE_56__shared_socket_socket_manager_service__["a" /* SocketManagerService */],
            __WEBPACK_IMPORTED_MODULE_42__upload_new_upload_service_new_upload_service__["a" /* NewUploadService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_viewprofile_viewprofile_component__ = __webpack_require__("../../../../../src/app/home/viewprofile/viewprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_pet_pets_pets_component__ = __webpack_require__("../../../../../src/app/home/pet/pets/pets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_pet_new_pet_new_pet_component__ = __webpack_require__("../../../../../src/app/home/pet/new-pet/new-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_pet_petdetail_petdetail_component__ = __webpack_require__("../../../../../src/app/home/pet/petdetail/petdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_adoption_application_adoption_application_component__ = __webpack_require__("../../../../../src/app/home/adoption-application/adoption-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_forms_forms_component__ = __webpack_require__("../../../../../src/app/home/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_wait_list_wait_list_component__ = __webpack_require__("../../../../../src/app/home/wait-list/wait-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_do_not_adopt_do_not_adopt_component__ = __webpack_require__("../../../../../src/app/home/do-not-adopt/do-not-adopt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_manage_people_manage_people_component__ = __webpack_require__("../../../../../src/app/home/manage-people/manage-people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_messages_messages_component__ = __webpack_require__("../../../../../src/app/contact/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_template_email_template_email_template_component__ = __webpack_require__("../../../../../src/app/contact/template/email-template/email-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_volunteer_opportunities_volunteer_opportunities_component__ = __webpack_require__("../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tools_tools_tools_component__ = __webpack_require__("../../../../../src/app/tools/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tools_rescue_network_rescue_network_component__ = __webpack_require__("../../../../../src/app/tools/rescue-network/rescue-network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tools_regional_breed_tracker_regional_breed_tracker_component__ = __webpack_require__("../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tools_transport_transport_component__ = __webpack_require__("../../../../../src/app/tools/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_user_user_component__ = __webpack_require__("../../../../../src/app/user/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_newuser_newuser_component__ = __webpack_require__("../../../../../src/app/user/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_userdetail_userdetail_component__ = __webpack_require__("../../../../../src/app/user/userdetail/userdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__contact_template_new_template_new_template_component__ = __webpack_require__("../../../../../src/app/contact/template/new-template/new-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__contact_new_question_new_question_component__ = __webpack_require__("../../../../../src/app/contact/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contact_question_template_question_template_component__ = __webpack_require__("../../../../../src/app/contact/question-template/question-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__contact_resume_message_resume_message_component__ = __webpack_require__("../../../../../src/app/contact/resume-message/resume-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tools_tracker_result_tracker_result_component__ = __webpack_require__("../../../../../src/app/tools/tracker-result/tracker-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__portal_volunteer_portal_volunteer_portal_component__ = __webpack_require__("../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__portal_portal_opportunities_portal_opportunities_component__ = __webpack_require__("../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__portal_portal_history_portal_history_component__ = __webpack_require__("../../../../../src/app/portal/portal-history/portal-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__portal_portal_hours_portal_hours_component__ = __webpack_require__("../../../../../src/app/portal/portal-hours/portal-hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__portal_portal_my_volunteer_portal_my_volunteer_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__portal_portal_my_messages_portal_my_messages_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__portal_portal_my_history_portal_my_history_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-history/portal-my-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__portal_portal_my_organizations_portal_my_organizations_component__ = __webpack_require__("../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.ts");

//Login & Register Components 


//Home Components










//Contact Components




//Tool Components




//User Component








//Volunteer Components 








// Route Configuration
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__home_viewprofile_viewprofile_component__["a" /* ViewprofileComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__contact_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_17__tools_tools_tools_component__["a" /* ToolsComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_21__user_user_user_component__["a" /* UserComponent */] },
    { path: 'newuser', component: __WEBPACK_IMPORTED_MODULE_22__user_newuser_newuser_component__["a" /* NewuserComponent */] },
    { path: 'userdetail', component: __WEBPACK_IMPORTED_MODULE_23__user_userdetail_userdetail_component__["a" /* UserdetailComponent */] },
    { path: 'pets', component: __WEBPACK_IMPORTED_MODULE_5__home_pet_pets_pets_component__["a" /* PetsComponent */] },
    { path: 'newPet', component: __WEBPACK_IMPORTED_MODULE_6__home_pet_new_pet_new_pet_component__["a" /* NewPetComponent */] },
    { path: 'petdetail', component: __WEBPACK_IMPORTED_MODULE_7__home_pet_petdetail_petdetail_component__["a" /* PetdetailComponent */] },
    { path: 'adoption', component: __WEBPACK_IMPORTED_MODULE_8__home_adoption_application_adoption_application_component__["a" /* AdoptionApplicationComponent */] },
    { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_9__home_forms_forms_component__["a" /* FormsComponent */] },
    { path: 'waitList', component: __WEBPACK_IMPORTED_MODULE_10__home_wait_list_wait_list_component__["a" /* WaitListComponent */] },
    { path: 'doNot', component: __WEBPACK_IMPORTED_MODULE_11__home_do_not_adopt_do_not_adopt_component__["a" /* DoNotAdoptComponent */] },
    { path: 'managePeople', component: __WEBPACK_IMPORTED_MODULE_12__home_manage_people_manage_people_component__["a" /* ManagePeopleComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_14__contact_messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'emailTemplate', component: __WEBPACK_IMPORTED_MODULE_15__contact_template_email_template_email_template_component__["a" /* EmailTemplateComponent */] },
    { path: 'volunteerOpportunities', component: __WEBPACK_IMPORTED_MODULE_16__contact_volunteer_opportunities_volunteer_opportunities_component__["a" /* VolunteerOpportunitiesComponent */] },
    { path: 'rescueNetwork', component: __WEBPACK_IMPORTED_MODULE_18__tools_rescue_network_rescue_network_component__["a" /* RescueNetworkComponent */] },
    { path: 'RegionalBreed', component: __WEBPACK_IMPORTED_MODULE_19__tools_regional_breed_tracker_regional_breed_tracker_component__["a" /* RegionalBreedTrackerComponent */] },
    { path: 'transport', component: __WEBPACK_IMPORTED_MODULE_20__tools_transport_transport_component__["a" /* TransportComponent */] },
    { path: 'newTemplate', component: __WEBPACK_IMPORTED_MODULE_24__contact_template_new_template_new_template_component__["a" /* NewTemplateComponent */] },
    { path: 'newQuestion', component: __WEBPACK_IMPORTED_MODULE_25__contact_new_question_new_question_component__["a" /* NewQuestionComponent */] },
    { path: 'QuestionTemplate', component: __WEBPACK_IMPORTED_MODULE_26__contact_question_template_question_template_component__["a" /* QuestionTemplateComponent */] },
    { path: 'ResumeMessage', component: __WEBPACK_IMPORTED_MODULE_27__contact_resume_message_resume_message_component__["a" /* ResumeMessageComponent */] },
    { path: 'trackerResult', component: __WEBPACK_IMPORTED_MODULE_28__tools_tracker_result_tracker_result_component__["a" /* TrackerResultComponent */] },
    { path: 'Portal/Volunteer', component: __WEBPACK_IMPORTED_MODULE_29__portal_volunteer_portal_volunteer_portal_component__["a" /* VolunteerPortalComponent */] },
    { path: 'Portal/Opportunities', component: __WEBPACK_IMPORTED_MODULE_30__portal_portal_opportunities_portal_opportunities_component__["a" /* PortalOpportunitiesComponent */] },
    { path: 'Portal/History', component: __WEBPACK_IMPORTED_MODULE_31__portal_portal_history_portal_history_component__["a" /* PortalHistoryComponent */] },
    { path: 'Portal/Hours', component: __WEBPACK_IMPORTED_MODULE_32__portal_portal_hours_portal_hours_component__["a" /* PortalHoursComponent */] },
    { path: 'Portal/Volunteers', component: __WEBPACK_IMPORTED_MODULE_33__portal_portal_my_volunteer_portal_my_volunteer_component__["a" /* PortalMyVolunteerComponent */] },
    { path: 'Portal/Messages', component: __WEBPACK_IMPORTED_MODULE_34__portal_portal_my_messages_portal_my_messages_component__["a" /* PortalMyMessagesComponent */] },
    { path: 'Portal/MyHistory', component: __WEBPACK_IMPORTED_MODULE_35__portal_portal_my_history_portal_my_history_component__["a" /* PortalMyHistoryComponent */] },
    { path: 'Portal/MyOrganizations', component: __WEBPACK_IMPORTED_MODULE_36__portal_portal_my_organizations_portal_my_organizations_component__["a" /* PortalMyOrganizationsComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n    margin-top:12%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px;\r\n    padding-right: 1%;  \r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    font-family: latoCustom; \r\n    text-align: -webkit-center;\r\n    display: -webkit-box;\r\n    margin-right: 26%;\r\n}\r\n#psln-panel{\r\n    width: 75%;\r\n    float: right;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 3em;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 1.8em;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n\r\n.imgCustom{\r\n    max-width: 66%;\r\n}\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n    .imgCustom{\r\n        max-width: 90%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width:1200px) {   \r\n    .psln-text{ \r\n        margin-right: 9%;\r\n    }\r\n  }\r\n  @media (max-width:725px) {   \r\n    .psln-text{ \r\n        margin-right: 1%;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Contact</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\"> \r\n          <app-sidebar></app-sidebar>        \r\n      <div class=\"col-md-6\" id=\"psln-panel\">\r\n          <div class=\"panel\" id=\"psln-panelBody\">\r\n              <div class=\"panel-body\"> \r\n                  <div class=\"row\">        \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                          <a routerLink=\"/messages\"><img src=\"../assets/img/messajes.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">Messages</p>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\r\n                        <a routerLink=\"/emailTemplate\"><img src=\"../assets/img/emailTemplates.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">Email Templates</p>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                        <a routerLink=\"/volunteerOpportunities\"><img src=\"../assets/img/volunteerOportunities.svg \" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">Volunteer Opportunities</p>\r\n                      </div>   \r\n                  </div>                     \r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n  <div class=\"container\">\r\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n        <a class=\"display-4 psln-btnContact\">Contact Us</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n} \r\n\r\n\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">E-mail Templates </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span routerLink=\"/contact\" class=\"redirect\">Contact</span> / Messages\r\n  </nav>\r\n\r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    \t<div class=\"row\">                        \r\n              <div class=\"col-md-12\"> \r\n              <div class=\"table-responsive\">\r\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                     <thead>\r\n                      <th> </th>\r\n                      <th>Name</th>\r\n                      <th>Species</th>\r\n                      <th>Breed</th>\r\n                      <th>Date</th>\r\n                      <th>Manage</th> \r\n                     </thead>\r\n      <tbody>          \r\n      <tr>\r\n          <td>1</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n          \r\n       <tr>\r\n          <td>2</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>3</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n          \r\n       <tr>\r\n          <td>4</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>5</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n         \r\n          \r\n         \r\n          \r\n      </tbody>\r\n              \r\n      </table>\r\n                      \r\n                  </div>\r\n                  \r\n              </div>\r\n        </div>\r\n       \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contact/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/contact/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 150px;\r\n    color: #fff;\r\n    padding-left: 4%;    \r\n    background-color: #583A98;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 7em;\r\n    width: 8em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n.psln-Text{\r\n    color: #583A98;\r\n}\r\n.psln-labText{\r\n    color: #583a98;\r\n    font-size: 1.5em;\r\n    padding: 1%;\r\n}\r\n.psln-rightNav{\r\n    float: right;\r\n}\r\n\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-copy{\r\n    border-radius: 30px;\r\n    background-color: #928E8F;\r\n    color: #fff; \r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> / <span class=\"redirect\" routerLink=\"/forms\">Forms</span> / <span class=\"redirect\" routerLink=\"/QuestionTemplate\">Template</span> / <span class=\"redirect\">New Question</span>\r\n  </nav>\r\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n        <div class=\"container psln-navSearch\"> \r\n            <div class=\"form-group\"> \r\n                <div class=\"col-md-12\">\r\n                    <p style=\"color:#fff;font-size:1.3em\">Form Title</p>\r\n                </div>                     \r\n            </div> \r\n          </div>\r\n        <div class=\"row\">                        \r\n                <div class=\"col-md-10\"> \r\n                <form class=\"form-horizontal\">\r\n                  <fieldset> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Brand\"> </label>  \r\n                        <br>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Page Tittle\" class=\"form-control input-md\">\r\n                          <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\r\n                        <div class=\"col-md-4\">\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-0\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                            Cleaning\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-1\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                            Off - Site Help\r\n                          </label>\r\n                        </div>\r\n                        </div>                        \r\n                    </div>  \r\n                    <div class=\"form-group\"> \r\n                        <div class=\"col-md-2\" align=\"center\">\r\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Next Question</a> \r\n                          \r\n                        </div>\r\n                        <div class=\"col-md-4 psln-rightNav\"  align=\"right\">\r\n                            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Save</a> \r\n                            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Cancel</a> \r\n                          </div>\r\n                      </div>  \r\n                </fieldset>\r\n              </form>\r\n                </div>\r\n          </div>\r\n         \r\n   \r\n    </div> "

/***/ }),

/***/ "../../../../../src/app/contact/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewQuestionComponent = (function () {
    function NewQuestionComponent() {
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/contact/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewQuestionComponent);

//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/question-template/question-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 150px;\r\n    color: #fff;\r\n    padding-left: 4%;    \r\n    background-color: #583A98;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 7em;\r\n    width: 8em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n.psln-Text{\r\n    color: #583A98;\r\n}\r\n.psln-labText{\r\n    color: #583a98;\r\n    font-size: 1.5em;\r\n    padding: 1%;\r\n}\r\n.psln-rightNav{\r\n    float: right;\r\n}\r\n\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnSave{\r\n    color:#fff;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/ADD.svg") + ") no-repeat; \r\n    background-color:#009CA7;\r\n    background-size: 25px;\r\n    background-position: left;    \r\n    width: 220px;\r\n    background-position-x: 10px;\r\n}\r\n.psln-btnFoot{\r\n    color:#fff;\r\n    border-radius: 30px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \r\n    background-color:#583A98;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 220px;   \r\n    background-position-x: 10px;\r\n}\r\n.psln-copy{\r\n    border-radius: 30px;\r\n    background-color: #928E8F;\r\n    color: #fff; \r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/question-template/question-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\"> Dashboard </span> / Forms\r\n  </nav>\r\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n        <div class=\"container psln-navSearch\"> \r\n            <div class=\"form-group\"> \r\n                <div class=\"col-md-12\">\r\n                    <p style=\"color:#fff;font-size:1.3em\">Form Title</p>\r\n                </div>                     \r\n            </div> \r\n          </div>\r\n        <div class=\"row\">                        \r\n                <div class=\"col-md-10\"> \r\n                <form class=\"form-horizontal\">\r\n                  <fieldset> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" for=\"Brand\"> </label>  \r\n                        <br>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Page Tittle\" class=\"form-control input-md\">\r\n                          <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\r\n                        <div class=\"psln-rightNav\">\r\n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Edit</a> \r\n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-waitlist\">Move</a> \r\n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-copy\">Copy</a> \r\n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-delete\">Delete</a> \r\n                        </div>\r\n                        <br>\r\n                        <div class=\"col-md-4\">\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-0\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                            Cleaning\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-1\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                            Off - Site Help\r\n                          </label>\r\n                        </div>\r\n                        </div>                        \r\n                    </div>  \r\n                    <div class=\"form-group\"> \r\n                        <div class=\"col-md-12\" align=\"center\">\r\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">New Question</a> \r\n                        </div>\r\n                      </div>  \r\n                </fieldset>\r\n              </form>\r\n                </div>\r\n          </div>\r\n         \r\n   \r\n    </div>\r\n    <div class=\"container\">\r\n    <div class=\"col-md-12 psln-divFoot\" align=\"center\">\r\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Save Template</a> \r\n    </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/contact/question-template/question-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionTemplateComponent = (function () {
    function QuestionTemplateComponent() {
    }
    QuestionTemplateComponent.prototype.ngOnInit = function () {
    };
    return QuestionTemplateComponent;
}());
QuestionTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question-template',
        template: __webpack_require__("../../../../../src/app/contact/question-template/question-template.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/question-template/question-template.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuestionTemplateComponent);

//# sourceMappingURL=question-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/resume-message/resume-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    color: #fff; \r\n    padding-left: 15%;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \r\n    background-color:#009CA7;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 150px;   \r\n    background-position-x: 10px;\r\n    margin-bottom:5%;\r\n    margin-top: 5%;\r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    color: #fff;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\r\n    background-color: #583A98;\r\n    background-size: 25px;\r\n    background-position: left;\r\n    background-position-x: 10px;\r\n    width: 103px;\r\n    padding-left: 13%;\r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%\r\n}\r\n.lead{\r\n    color: #583A98;\r\n}\r\n.psln-option{\r\n    height: 44px;\r\n    border-radius: 21px;\r\n    border: none;\r\n}\r\n.psln-rightNav{\r\n    float: right;\r\n}\r\n.psln-twoCol{ \r\n    margin-top:8%;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 200px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/resume-message/resume-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Rescue Network </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/tools\">Tools </span>/ <span class=\"redirect\" routerLink=\"/rescueNetwork\">Rescue Network</span> / <span class=\"redirect\"  >Messages</span>\r\n  </nav>\r\n  \r\n<div class=\"container\">\r\n    <br>  \r\n    <div class=\"col-md-3\">\r\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Back</a> \r\n    </div>  \r\n</div> \r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    <div class=\"col-md-12\">\r\n        <div class=\"lead\" style=\"float:left;\">Minnesota Rescues</div> \r\n        <div class=\"psln-rightNav\">\r\n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-waitlist\">Message</a> \r\n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-delete\">Transfer</a>  \r\n        </div>\r\n        <div class=\"psln-twoCol\">\r\n            <form class=\"form-horizontal\">\r\n            <div class=\"form-group\" style=\"float: left;\">\r\n                <div class=\"col-sm-4\">\r\n                    <img  class=\"psln-imgPet\" src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\">\r\n                </div>\r\n            </div>\r\n            <div style=\"display:inline-block; margin-left: 5%;\" >\r\n            <div class=\"form-group\">\r\n               \r\n              <div class=\"col-md-12\">\r\n              \r\n                  <p><span>Name </span> <span>General Info</span></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                \r\n               <div class=\"col-md-12\">\r\n               \r\n                   <p><span>Name </span> <span>General Info</span></p>\r\n               </div>\r\n             </div>\r\n             <div class=\"form-group\">\r\n                \r\n               <div class=\"col-md-12\">\r\n               \r\n                   <p><span>Name </span> <span>General Info</span></p>\r\n               </div>\r\n             </div>\r\n            \r\n             <div class=\"form-group\">\r\n                \r\n               <div class=\"col-md-12\">\r\n               \r\n                   <p><span>Name </span> <span>General Info</span></p>\r\n               </div>\r\n             </div>\r\n            \r\n             <div class=\"form-group\">\r\n                \r\n               <div class=\"col-md-12\">\r\n               \r\n                   <p><span>Name </span> <span>General Info</span></p>\r\n               </div>\r\n             </div>\r\n            </div>\r\n            </form>\r\n          </div> \r\n          <h3>About Us</h3>\r\n          <p> \r\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n          </p>  \r\n          <h3>Mission</h3>\r\n          <p> \r\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n          </p>  \r\n    </div>     \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contact/resume-message/resume-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeMessageComponent = (function () {
    function ResumeMessageComponent() {
    }
    ResumeMessageComponent.prototype.ngOnInit = function () {
    };
    return ResumeMessageComponent;
}());
ResumeMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resume-message',
        template: __webpack_require__("../../../../../src/app/contact/resume-message/resume-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/resume-message/resume-message.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResumeMessageComponent);

//# sourceMappingURL=resume-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/template/email-template/email-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 9em;\r\n    width: 11em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-imgAdd{\r\n    margin-top: 30%;\r\n    padding-bottom: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/template/email-template/email-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">E-mail Templates</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n   <span class=\"redirect\" routerLink=\"/contact\" >Contact </span> / <span class=\"redirect\"   > E-mail Templates </span>\r\n  </nav>\r\n  <div class=\"container\"> \r\n    <br>\r\n    <div > \r\n      \t<div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n            <a class=\"btn btn-default add-new-button\" routerLink=\"/newTemplate\">\r\n              <img class=\"psln-imgAdd\" src=\"../assets/img/ADD.svg\" width=\"50\">\r\n              <br>  \r\n              <span>Create New Template</span>\r\n            </a>      \r\n            </div>      \r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contact/template/email-template/email-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailTemplateComponent = (function () {
    function EmailTemplateComponent() {
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
    };
    return EmailTemplateComponent;
}());
EmailTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email-template',
        template: __webpack_require__("../../../../../src/app/contact/template/email-template/email-template.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/template/email-template/email-template.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmailTemplateComponent);

//# sourceMappingURL=email-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/template/new-template/new-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n        position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 7em;\r\n    width: 8em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n.psln-btnSave{\r\n    color:#fff;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \r\n    background-color:#009CA7;\r\n    background-size: 25px;\r\n    background-position: left;    \r\n    width: 220px;\r\n    background-position-x: 10px;\r\n}\r\n.psln-btnFoot{\r\n    color:#fff;\r\n    border-radius: 30px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \r\n    background-color:#583A98;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 220px;   \r\n    background-position-x: 10px;\r\n    margin-bottom:5%;\r\n    margin-top: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/template/new-template/new-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Email Templates</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/contact\">Contact</span> / <span class=\"redirect\" routerLink=\"/emailTemplate\">Email Templates</span> / <span class=\"redirect\" >New Template</span>\r\n  </nav>\r\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n        <div class=\"container psln-navSearch\"> \r\n            <div class=\"form-group\"> \r\n                <div class=\"col-md-12\">\r\n                    <p style=\"color:#fff;font-size:1.3em\">Email template tittle</p>\r\n                </div>                     \r\n            </div> \r\n          </div>\r\n        <div class=\"row\">                        \r\n                <div class=\"col-md-10\"> \r\n                    <h3>Thank You For Applying</h3>\r\n                <form class=\"form-horizontal\">\r\n                  <fieldset> \r\n                    <div class=\"form-group\">\r\n                        <label class=\" \" for=\"Brand\">     Enter Recipients     </label>  \r\n                        <br>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Title Here\" class=\"form-control input-md\">\r\n                          <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div>  \r\n                    <div class=\"form-group\">\r\n                        <label class=\" \" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\r\n                        <br> \r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-0\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                Grant Writing                                \r\n                              </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-1\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                Marketing\r\n                              </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-0\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                Cleaning\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-1\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                Off - Site Help\r\n                              </label>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"checkbox\">\r\n                                  <label for=\"checkboxes-0\">\r\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                    Grant Writing                                \r\n                                  </label>\r\n                                </div>\r\n                                <div class=\"checkbox\">\r\n                                  <label for=\"checkboxes-1\">\r\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                    Marketing\r\n                                  </label>\r\n                                </div>\r\n                            </div>                        \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"\" for=\"often\">Message</label>  \r\n                        <br>\r\n                        <div class=\"col-md-12\">\r\n                            <textarea class=\"form-control\" id=\"speneeds\" name=\"speneeds\">\r\n                                Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</textarea>\r\n                   \r\n                        </div>\r\n                    </div>   \r\n                    <div class=\"form-group\"> \r\n                        <div class=\"col-md-12\" align=\"center\">\r\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\">Send Email</a> \r\n                        </div>\r\n                      </div>  \r\n                </fieldset>\r\n              </form>\r\n                </div>\r\n          </div>\r\n         \r\n             \r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12 psln-divFoot\" align=\"center\">\r\n          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Save Template</a> \r\n      </div>\r\n      "

/***/ }),

/***/ "../../../../../src/app/contact/template/new-template/new-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewTemplateComponent = (function () {
    function NewTemplateComponent() {
    }
    NewTemplateComponent.prototype.ngOnInit = function () {
    };
    return NewTemplateComponent;
}());
NewTemplateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-template',
        template: __webpack_require__("../../../../../src/app/contact/template/new-template/new-template.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/template/new-template/new-template.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewTemplateComponent);

//# sourceMappingURL=new-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 7em;\r\n    width: 8em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n.psln-Text{\r\n    color: #583A98;\r\n}\r\n.psln-labText{\r\n    color: #583a98;\r\n    font-size: 1.5em;\r\n    padding: 1%;\r\n}\r\n.psln-btnFoot{\r\n    color:#fff;\r\n    border-radius: 5px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \r\n    background-color:#583A98;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 220px;   \r\n    background-position-x: 10px;\r\n    margin-bottom:5%;\r\n    margin-top: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Volunteer Opportunities</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/contact\">Contact </span>/<span class=\"redirect\"> Volunteer Opportunities</span>\r\n  </nav>\r\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n        <div class=\"container psln-navSearch\"> \r\n            <div class=\"form-group\"> \r\n                <div class=\"col-md-4\">\r\n                    <p style=\"color:#fff;font-size:1.3em\">Opportunities Specs</p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                        <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                        <option value=\"1\">Option one</option>\r\n                        <option value=\"2\">Option two</option>\r\n                        </select>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                        <p style=\"color:#fff;font-size:1.3em\">Expedition Date:</p>\r\n                </div> \r\n                    \r\n            </div> \r\n          </div>\r\n        <div class=\"row\">                        \r\n                <div class=\"col-md-10\"> \r\n                    <h2 class=\"psln-Text\">About</h2>\r\n                    <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>\r\n                <form class=\"form-horizontal\">\r\n                  <fieldset> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText control-label\" for=\"Brand\">Volunteer Opportunitie Title</label>  \r\n                        <br>\r\n                        <div class=\"col-md-12\">\r\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Title Here\" class=\"form-control input-md\">\r\n                          <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText control-label\" for=\"speneeds\">Volunteer Opportunitie Description </label>\r\n                        <br>\r\n                        <div class=\"col-md-12\">                     \r\n                          <textarea class=\"form-control\" id=\"speneeds\" name=\"speneeds\">\r\n                              Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText control-label\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\r\n                        <br>\r\n                        <div class=\"col-md-3\">\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-0\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                            Cleaning\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"checkbox\">\r\n                          <label for=\"checkboxes-1\">\r\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                            Off - Site Help\r\n                          </label>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-0\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                Grant Writing                                \r\n                              </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-1\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                Marketing\r\n                              </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-0\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                Cleaning\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                              <label for=\"checkboxes-1\">\r\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                Off - Site Help\r\n                              </label>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"checkbox\">\r\n                                  <label for=\"checkboxes-0\">\r\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\r\n                                    Grant Writing                                \r\n                                  </label>\r\n                                </div>\r\n                                <div class=\"checkbox\">\r\n                                  <label for=\"checkboxes-1\">\r\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\r\n                                    Marketing\r\n                                  </label>\r\n                                </div>\r\n                            </div>                        \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText control-label\" for=\"often\">Event Day(s)</label>  \r\n                        <br>\r\n                        <div class=\"col-md-12\">\r\n                        <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\r\n                        <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"psln-labText control-label\" for=\"often\">Estimate Volunteer Hours</label>  \r\n                        <br>\r\n                        <div class=\"col-md-12\">\r\n                        <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\r\n                        <span class=\"help-block\"> </span>  \r\n                        </div>\r\n                    </div>   \r\n                    <div class=\"form-group\"> \r\n                        <div class=\"col-md-12\" align=\"center\">\r\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Post</a> \r\n                        </div>\r\n                      </div>  \r\n                </fieldset>\r\n              </form>\r\n                </div>\r\n          </div>\r\n         \r\n             \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerOpportunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VolunteerOpportunitiesComponent = (function () {
    function VolunteerOpportunitiesComponent() {
    }
    VolunteerOpportunitiesComponent.prototype.ngOnInit = function () {
    };
    return VolunteerOpportunitiesComponent;
}());
VolunteerOpportunitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-volunteer-opportunities',
        template: __webpack_require__("../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VolunteerOpportunitiesComponent);

//# sourceMappingURL=volunteer-opportunities.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/adoption-application/adoption-application.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n    cursor: pointer;\r\n}\r\n.psln-navUsersText:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n    cursor: pointer;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\r\n    background-color: #fff;\r\n    background-size: 25px;\r\n    background-position: right;    \r\n    background-position-x: 260px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/adoption-application/adoption-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4 psln-oracleText\">Adoption Application</h1>\r\n    </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n    <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> / <span class=\"redirect\" >Adoption Application</span>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"container\">\r\n            <br>\r\n            <p class=\"lead\">Adoption Application</p>\r\n            <div class=\"addPet\">\r\n                <form>\r\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" placeholder=\"Search...\">\r\n                </form>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\r\n                        <li>\r\n                            <a class=\"psln-navUsersText2\">Filled Out Applications</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"psln-navUsersText2\">Common Aplication</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"psln-navUsersText2\">Foster Application</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"psln-navUsersText2\">Volunteer Application</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"psln-contentGeneral\">\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"bs-calltoaction bs-calltoaction-default\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9 cta-contents\">\r\n                        <div class=\"cta-desc\">\r\n                            <p>Describe the action here.</p>\r\n                            <p>Describe the action here.</p>\r\n                            <p>Describe the action here.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 cta-button\">\r\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a>\r\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\r\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/adoption-application/adoption-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdoptionApplicationComponent = (function () {
    function AdoptionApplicationComponent() {
    }
    AdoptionApplicationComponent.prototype.ngOnInit = function () {
    };
    return AdoptionApplicationComponent;
}());
AdoptionApplicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adoption-application',
        template: __webpack_require__("../../../../../src/app/home/adoption-application/adoption-application.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/adoption-application/adoption-application.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdoptionApplicationComponent);

//# sourceMappingURL=adoption-application.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px; \r\n    padding-right: 1%;\r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    font-family: latoCustom; \r\n    text-align: -webkit-center;\r\n    display: -webkit-box;\r\n    margin-right: 26%;\r\n}\r\n#psln-panel{\r\n    width: 75%;\r\n    float: right;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n    margin-bottom: 0px;\r\n    background-color: #fff;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 48px;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n \r\n\r\n.imgCustom{\r\n    max-width: 66%;\r\n}\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n    .imgCustom{\r\n        max-width: 90%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width:1200px) {   \r\n    .psln-text{ \r\n        margin-right: 9%;\r\n    }\r\n  }\r\n  @media (max-width:725px) {   \r\n    .psln-text{ \r\n        margin-right: 1%;\r\n    }\r\n }\r\n    @media (max-width:673px) {   \r\n        .psln-text{ \r\n          font-size: 0.7em;\r\n    }\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\" >\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Dashboard</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\"> \r\n            <app-sidebar></app-sidebar>        \r\n        <div class=\"col-md-6\" id=\"psln-panel\">\r\n            <div class=\"panel\" id=\"psln-panelBody\">\r\n                <div class=\"panel-body\"> \r\n                    <div class=\"row\">        \r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                            <a routerLink=\"/pets\"><img   src=\"assets/img/Pets.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Pets</span>\r\n                        </div>            \r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\r\n                            <a routerLink=\"/adoption\"><img src=\"assets/img/AdoptionApplication.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Adoption Application</span>\r\n                        </div>            \r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                            <a routerLink=\"/forms\"><img src=\"assets/img/Forms.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Forms</span>\r\n                        </div>      \r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter irrigation\">\r\n                            <a routerLink=\"/waitList\"><img src=\"assets/img/Waitlist.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Wait List</span>\r\n                        </div>\r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter spray\">\r\n                            <a routerLink=\"/doNot\"><img src=\"assets/img/DoNotAdoptList.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Do Not Adopt</span>\r\n                        </div>            \r\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter irrigation\">\r\n                            <a routerLink=\"/managePeople\"><img src=\"assets/img/managePeople.svg\" class=\"img-responsive imgCustom\"></a>\r\n                            <span class=\"psln-text\">Manage People</span>\r\n                        </div> \r\n                    </div>                     \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n    <div class=\"container\">\r\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n        <a class=\"display-4 psln-btnContact\" (click)=\"logout()\">Contact Us</a>\r\n    </div>\r\n</div>\r\n\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, socketService) {
        this.router = router;
        this.socketService = socketService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    //Logout
    DashboardComponent.prototype.logout = function () {
        this.socketService.logout();
        this.router.navigate(['/']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/do-not-adopt/do-not-adopt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/do-not-adopt/do-not-adopt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Do Not Adopt List </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard </span>/ <span class=\"redirect\">Do Not Adopt List  </span>\r\n  </nav>\r\n  <div class=\"container psln-navSearch\"> \r\n        <div class=\"form-group\"> \r\n            <div class=\"col-md-3\">\r\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                <option value=\"1\">Option one</option>\r\n                <option value=\"2\">Option two</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                    <option value=\"1\">Option one</option>\r\n                    <option value=\"2\">Option two</option>\r\n                    </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                    <option value=\"1\">Option one</option>\r\n                    <option value=\"2\">Option two</option>\r\n                    </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                    <option value=\"1\">Option one</option>\r\n                    <option value=\"2\">Option two</option>\r\n                    </select>\r\n            </div>\r\n                \r\n        </div> \r\n      </div>\r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    \t<div class=\"row\">                        \r\n              <div class=\"col-md-12\"> \r\n              <div class=\"table-responsive\">\r\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                     <thead>\r\n                      <th> </th>\r\n                      <th>Name</th>\r\n                      <th>Species</th>\r\n                      <th>Breed</th>\r\n                      <th>Date</th>\r\n                      <th>Manage</th> \r\n                     </thead>\r\n      <tbody>          \r\n      <tr>\r\n          <td>1</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a>\r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n          \r\n       <tr>\r\n          <td>2</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>3</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n          \r\n       <tr>\r\n          <td>4</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>5</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a>\r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\r\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n         \r\n          \r\n         \r\n          \r\n      </tbody>\r\n              \r\n      </table>\r\n                      \r\n                  </div>\r\n                  \r\n              </div>\r\n        </div>\r\n       \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/do-not-adopt/do-not-adopt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoNotAdoptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoNotAdoptComponent = (function () {
    function DoNotAdoptComponent() {
    }
    DoNotAdoptComponent.prototype.ngOnInit = function () {
    };
    return DoNotAdoptComponent;
}());
DoNotAdoptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-do-not-adopt',
        template: __webpack_require__("../../../../../src/app/home/do-not-adopt/do-not-adopt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/do-not-adopt/do-not-adopt.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DoNotAdoptComponent);

//# sourceMappingURL=do-not-adopt.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 150px;\r\n    color: #fff;\r\n    padding-left: 4%;    \r\n    background-color: #583A98;\r\n}\r\n.add-new-button {  \r\n    font-size: 1.5em;\r\n    line-height: 1.1em;\r\n    color: #ffffff;\r\n    background-color: #583A98;\r\n    height: 7em;\r\n    width: 8em;\r\n    position: relative;\r\n    margin: 1%;\r\n}\r\n.psln-imgAdd{\r\n    padding-top: 30%;\r\n    padding-bottom: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard </span>/ <span class=\"redirect\">Forms</span>\r\n  </nav>\r\n  <div class=\"container\"> \r\n    <br>\r\n    <div class=\" panel\"> \r\n      \t<div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n            <a class=\"btn btn-default add-new-button\" routerLink=\"\">\r\n              <img class=\"psln-imgAdd\" src=\"assets/img/ADD.svg\" width=\"50\">\r\n              <br>\r\n              <span>Add New Form </span>\r\n            </a>      \r\n            </div>      \r\n       \r\n          <div class=\"col-md-6\">    \r\n              <form class=\"form-horizontal\">\r\n                  <fieldset> \r\n                  <!-- Text input-->\r\n                  <br>\r\n                  <div class=\"col-md-12\">\r\n                  <!-- Text input-->\r\n                  <div class=\"form-group\">\r\n                    <label class=\"\" for=\"Brand\">Add Form Tittle</label>  \r\n                    <br>\r\n                    <div class=\"col-md-6\">\r\n                    <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Brand\" class=\"form-control input-md\">\r\n                    <span class=\"help-block\"> </span>  \r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <!-- Text input-->\r\n                  <div class=\"form-group\">\r\n                    <label class=\"\" for=\"much\">Select Form Template</label>  \r\n                    <br>\r\n                    <div class=\"col-md-6\">\r\n                    <input id=\"much\" name=\"much\" type=\"text\" placeholder=\"How Much\" class=\"form-control input-md\">\r\n                    <span class=\"help-block\"> </span>  \r\n                    </div>\r\n                  </div> \r\n                  <div class=\"form-group\"> \r\n                    <div class=\"col-md-6\" align=\"center\">\r\n                      <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnPlace\" routerLink=\"/QuestionTemplate\">Save</a> \r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n                  </fieldset>\r\n                  </form>\r\n          </div> \r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__("../../../../../src/app/home/forms/forms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/forms/forms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);

//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/manage-people/manage-people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 110%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-active{\r\n    background-color: rgba(196, 245, 255, 0.47) !important;\r\n    color: #583A98 !important; \r\n    cursor: pointer;\r\n}\r\n.psln-navUsersText:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n    cursor: pointer;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\r\n    background-color: #fff;\r\n    background-size: 25px;\r\n    background-position: right;    \r\n    background-position-x: 260px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/manage-people/manage-people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4 psln-oracleText\">People Management</h1>\r\n    </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n   <span class=\"redirect\" routerLink=\"/home\"> Dashboard </span>/ <span class=\"redirect\">People Management</span>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"container\">\r\n            <br>\r\n            <p class=\"lead\">People Management</p>\r\n            <div class=\"addPet\">\r\n                <form>\r\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\"  [(ngModel)]=\"filter\" placeholder=\"Search...\">\r\n                </form>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\r\n                        <li>\r\n                            <a (click)=\"listVolunteers()\" id=\"volun\" class=\"psln-navUsersText2 psln-active\">Volunteers</a>\r\n                        </li>\r\n                        <li>\r\n                            <a (click)=\"listFosters()\" id=\"fost\" class=\"psln-navUsersText2\">Fosters</a>\r\n                        </li>\r\n                        <li>\r\n                            <a (click)=\"listEmployees()\" id=\"emplo\" class=\"psln-navUsersText2\">Employees</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"psln-contentGeneral\">\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"bs-calltoaction bs-calltoaction-default\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table id=\"mytable\" class=\"table table-bordred  \">\r\n                                <thead>\r\n                                    <th> </th>\r\n                                    <th>Bulk</th>\r\n                                    <th>Name</th>\r\n                                    <th>Date</th>\r\n                                    <th style=\"text-align: center;\">Manage</th>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let user of volunteers |userfilter:filter\">\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td>{{user.firstname}} {{user.lastname}}</td>\r\n                                        <td>{{user.birthDate}}</td>\r\n                                        <!-- <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n                    <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>-->\r\n                                        <td>\r\n                                            <a (click)=\"deleteUser(user)\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n\r\n                            </table>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/manage-people/manage-people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_managepeople_service__ = __webpack_require__("../../../../../src/app/home/manage-people/shared/managepeople.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagePeopleComponent = (function () {
    function ManagePeopleComponent(managepeopleService, toastr, router, vcr) {
        this.managepeopleService = managepeopleService;
        this.toastr = toastr;
        this.router = router;
    }
    ManagePeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managepeopleService.getVolunteers().subscribe(function (res) {
            _this.volunteers = res;
            console.log(res);
        });
    };
    ManagePeopleComponent.prototype.listEmployees = function () {
        var _this = this;
        document.getElementById('volun').classList.remove('psln-active');
        document.getElementById('fost').classList.remove('psln-active');
        document.getElementById('emplo').classList.add('psln-active');
        this.managepeopleService.getEmployees().subscribe(function (res) {
            _this.volunteers = res;
            console.log(res);
        });
    };
    ManagePeopleComponent.prototype.listVolunteers = function () {
        var _this = this;
        document.getElementById('emplo').classList.remove('psln-active');
        document.getElementById('fost').classList.remove('psln-active');
        document.getElementById('volun').classList.add('psln-active');
        this.managepeopleService.getVolunteers().subscribe(function (res) {
            _this.volunteers = res;
            console.log(res);
        });
    };
    ManagePeopleComponent.prototype.listFosters = function () {
        document.getElementById('emplo').classList.remove('psln-active');
        document.getElementById('fost').classList.add('psln-active');
        document.getElementById('volun').classList.remove('psln-active');
        this.volunteers = null;
    };
    ManagePeopleComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var r = confirm("Delete User? " + user.firstname);
        if (r == true) {
            this.managepeopleService.deleteUser(user.id).subscribe(function (res) {
                console.dir(res);
                _this.toastr.success('User Delete!', 'Success!', { showCloseButton: true });
                if (user.UserTypeId == 1) {
                    _this.managepeopleService.getEmployees().subscribe(function (res) {
                        _this.volunteers = res;
                        console.log(res);
                    });
                }
                if (user.UserTypeId == 3) {
                    _this.managepeopleService.getVolunteers().subscribe(function (res) {
                        _this.volunteers = res;
                        console.log(res);
                    });
                }
            });
        }
        else {
        }
    };
    return ManagePeopleComponent;
}());
ManagePeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-people',
        template: __webpack_require__("../../../../../src/app/home/manage-people/manage-people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/manage-people/manage-people.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_managepeople_service__["a" /* ManagepeopleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_managepeople_service__["a" /* ManagepeopleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], ManagePeopleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manage-people.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/manage-people/shared/managepeople.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagepeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagepeopleService = (function () {
    function ManagepeopleService(socketManager) {
        this.socketManager = socketManager;
    }
    ManagepeopleService.prototype.getVolunteers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get my org volunteers', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    ManagepeopleService.prototype.getEmployees = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get my org employees', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    ManagepeopleService.prototype.deleteUser = function (id) {
        var _this = this;
        console.log(id);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('delete user', { id: id }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return ManagepeopleService;
}());
ManagepeopleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], ManagepeopleService);

var _a;
//# sourceMappingURL=managepeople.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/manage-people/shared/manager-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManagerFilterPipe = (function () {
    function ManagerFilterPipe() {
    }
    ManagerFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {User} book The user to compare to the filter.
     * @param {User} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    ManagerFilterPipe.prototype.applyFilter = function (user, filter) {
        for (var key in filter) {
            if (user['firstname'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1 && user['lastname'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1 && user['id'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1) {
                console.log(filter + " -> " + "No Encontre");
                return false;
            }
            else {
                console.log(key + " -> " + " Encontre");
            }
        }
        return true;
    };
    return ManagerFilterPipe;
}());
ManagerFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'userfilter',
        pure: false
    })
], ManagerFilterPipe);

//# sourceMappingURL=manager-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/new-pet/new-pet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 100%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.control-label{\r\n    color: #583A98;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.psln-threeCol{\r\n    -webkit-column-count: 3;\r\n            column-count: 3;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 30px;\r\n}\r\n.psln-btnSave{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n}\r\n.psln-btnCancel{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #a7a7b5;\r\n    color: #fff;\r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.psln-btnFoot{\r\n    border-radius: 25px;\r\n    width: 150px;\r\n    margin-left: 5%;\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n/* Upload Image */\r\n\r\n.dragarea{\r\n    height: 280px;\r\n    border: 1px solid;\r\n    padding: 16%;\r\n    margin-top: 2%;\r\n    margin-left: 24%;\r\n    background-image:url('http://34.215.129.201:3000/assets/img/pets.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.textLoad{\r\n    position: absolute;\r\n    margin-top: -82px;\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n.none{\r\n    display: none;\r\n}\r\n.textInfo{\r\n    font-size: 12px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/new-pet/new-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">New Pets</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> / <span class=\"redirect\" routerLink=\"/pets\">Pets</span> / <span class=\"redirect\"  >New Pets</span>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <!-- Text input-->\r\n        <div class=\"psln-threeCol\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-12\">\r\n\r\n              <div class=\"dragarea\" id=\"preImage\">\r\n                <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"4\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\r\n                  (change)=\"readUrl($event)\">\r\n                </app-file-upload>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"name\">Name</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"pet.name\" placeholder=\"Name\" class=\"form-control input-md\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"intake\">Intake Date</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"intake\" name=\"intake\" type=\"date\" [(ngModel)]=\"pet.intakeDate\" placeholder=\"Intake Date\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"age\"> Age</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"age\" name=\"age\" type=\"text\" [(ngModel)]=\"pet.ageYears\" placeholder=\"Age\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n          <!-- Select input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Species\">Species</label>\r\n            <div class=\"col-md-8\">\r\n              <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"pet.PetSpeciesId\">\r\n                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <!-- Select input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Breed\">Breed</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Breed\" name=\"Breed\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.breedName\" placeholder=\"Breed\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Color\">Color</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Color\" name=\"Color\" type=\"text\" [(ngModel)]=\"pet.color\" placeholder=\"Color\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"marking\">Special Markings</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"marking\" name=\"marking\" type=\"text\" [(ngModel)]=\"pet.specialMarkings\" placeholder=\"Special Markings\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Weight\">Weight</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Weight\" name=\"Weight\" type=\"text\" [(ngModel)]=\"pet.weight\" placeholder=\"Weight\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Location\">Location</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Location\" name=\"Location\" type=\"text\" [(ngModel)]=\"pet.location\" placeholder=\"Location\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Status\">Status</label>\r\n            <div class=\"col-md-8\">\r\n              <select id=\"Status\" name=\"Status\" class=\"form-control\" [(ngModel)]=\"pet.status\">\r\n                <option value=\"Adoptables\">Adoptables</option>\r\n                <option value=\"Medical Hold\">Medical Hold</option>\r\n                <option value=\"Sanctuary\">Sanctuary</option>\r\n                <option value=\"Adopted\">Adopted</option>\r\n                <option value=\"Transferred\">Transferred</option>\r\n                <option value=\"Euthanized\">Euthanized</option>\r\n              </select>\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"date\">Out Date</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"date\" name=\"date\" type=\"date\" [(ngModel)]=\"pet.outOfDate\" placeholder=\"Out Date\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-md-12\">\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-2\">\r\n                <label class=\"col-md-12 control-label\" for=\"Brand\">Food Brand<br> <span class=\"textInfo\">(Dietary Information)</span></label>  \r\n            </div> \r\n            <div class=\"col-md-8\">\r\n              <input id=\"Brand\" name=\"Brand\" type=\"text\" [(ngModel)]=\"pet.foodBrand\" placeholder=\"Food Brand\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"much\">How Many Cups of Food?</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"much\" name=\"much\" type=\"text\" [(ngModel)]=\"pet.foodAmount\" placeholder=\"How Many Cups of Food?\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"often\">How Often</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"often\" name=\"often\" type=\"text\" [(ngModel)]=\"pet.foodPerDay\" placeholder=\"How Often\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Textarea -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"Instructions\">Instructions</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea class=\"form-control\" id=\"Instructions\" [(ngModel)]=\"pet.instructions\" name=\"Instructions\"> Description....</textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Multiple Radios (inline)  Organizar-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"radios\">Special Needs</label>\r\n            <div class=\"col-md-8\">\r\n              <label class=\"radio-inline\" for=\"radios-0\">\r\n                <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"\" checked=\"checked\"> Yes\r\n              </label>\r\n              <label class=\"radio-inline\" for=\"radios-1\">\r\n                <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"\"> No\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Textarea -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"speneeds\"> </label>\r\n            <div class=\"col-md-8\">\r\n              <textarea class=\"form-control\" id=\"speneeds\" [(ngModel)]=\"pet.textArea\" name=\"speneeds\">Description.... </textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Button (Double) -->\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12\" align=\"center\">\r\n              <a id=\"button1id\" name=\"button1id\" (click)=\"createPet(pet)\" class=\"btn btn-lg  btn-default psln-btnSave\">Save</a>\r\n              <a id=\"button2id\" name=\"button2id\" routerLink=\"/pets\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"col-md-12 psln-divFoot\" align=\"center\">\r\n    <!-- <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> Documents</a>\r\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/notes.svg\" width=\"25\" height=\"25\"> Notes</a>\r\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> History</a>-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/pet/new-pet/new-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_new_pet_service__ = __webpack_require__("../../../../../src/app/home/pet/new-pet/shared/new-pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPetComponent = (function () {
    function NewPetComponent(newPetServices, router, fileUploadComponent, toastr, vcr) {
        this.newPetServices = newPetServices;
        this.router = router;
        this.fileUploadComponent = fileUploadComponent;
        this.toastr = toastr;
        this.pet = {};
        this.imgUp = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    NewPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgUp.name = "";
        this.pet.name = "";
        this.pet.intakeDate = "";
        this.pet.ageYears = "";
        this.pet.PetSpeciesId = "";
        this.pet.breedName = "";
        this.pet.color = "";
        this.pet.specialMarkings = "";
        this.pet.weight = "";
        this.pet.location = "";
        this.pet.status = "";
        this.pet.foodBrand = "";
        this.pet.foodAmount = "";
        this.pet.foodPerDay = "";
        this.pet.instructions = "";
        this.pet.textArea = "";
        this.newPetServices.getPetSpecies().subscribe(function (res) {
            _this.petSpecies = res;
            console.dir(res);
        });
    };
    NewPetComponent.prototype.validateData = function (pet) {
        if (this.imgUp.name == "") {
            this.toastr.error('Required Image!', 'Oops!', { showCloseButton: true });
            document.getElementById("name").focus();
            return false;
        }
        if (this.pet.instructions == "") {
            this.toastr.error('Required Instruction !', 'Oops!', { showCloseButton: true });
            document.getElementById("Instructions").focus();
            return false;
        }
        if (this.pet.foodPerDay == "") {
            this.toastr.error('Required Often!', 'Oops!', { showCloseButton: true });
            document.getElementById("often").focus();
            return false;
        }
        if (this.pet.foodAmount == "") {
            this.toastr.error('Required Much!', 'Oops!', { showCloseButton: true });
            document.getElementById("much").focus();
            return false;
        }
        if (this.pet.foodBrand == "") {
            this.toastr.error('Required Brand!', 'Oops!', { showCloseButton: true });
            document.getElementById("Brand").focus();
            return false;
        }
        if (this.pet.status == "") {
            this.toastr.error('Required Status!', 'Oops!', { showCloseButton: true });
            document.getElementById("Status").focus();
            return false;
        }
        if (this.pet.location == "") {
            this.toastr.error('Required Location!', 'Oops!', { showCloseButton: true });
            document.getElementById("Location").focus();
            return false;
        }
        if (this.pet.weight == "") {
            this.toastr.error('Required Weight!', 'Oops!', { showCloseButton: true });
            document.getElementById("Weight").focus();
            return false;
        }
        if (this.pet.specialMarkings == "") {
            this.toastr.error('Required Special Markings!', 'Oops!', { showCloseButton: true });
            document.getElementById("marking").focus();
            return false;
        }
        if (this.pet.color == "") {
            this.toastr.error('Required Color!', 'Oops!', { showCloseButton: true });
            document.getElementById("Color").focus();
            return false;
        }
        if (this.pet.petBreed == "") {
            this.toastr.error('Required Breed!', 'Oops!', { showCloseButton: true });
            document.getElementById("Breed").focus();
            return false;
        }
        if (this.pet.PetSpeciesId == "") {
            this.toastr.error('Required Species!', 'Oops!', { showCloseButton: true });
            document.getElementById("Species").focus();
            return false;
        }
        if (this.pet.ageYears == "") {
            this.toastr.error('Required Age!', 'Oops!', { showCloseButton: true });
            document.getElementById("age").focus();
            return false;
        }
        if (this.pet.name == "") {
            this.toastr.error('Required Name!', 'Oops!', { showCloseButton: true });
            document.getElementById("name").focus();
            return false;
        }
        if (this.pet.intakeDate == "") {
            this.toastr.error('Required Intake Date!', 'Oops!', { showCloseButton: true });
            document.getElementById("intake").focus();
            return false;
        }
        return true;
        // TODO  move all the below validations to here
    };
    NewPetComponent.prototype.createPet = function (pet) {
        var _this = this;
        if (this.validateData(this.pet)) {
            this.toastr.info('Upload ', 'Loading');
            this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                result.subscribe(function (res) {
                    var url = res[0].url;
                    pet.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                    console.dir(pet);
                    _this.newPetServices.createPet(pet).subscribe(function (res) {
                        console.dir(res);
                        _this.msg = res;
                        if (_this.msg.error) {
                            _this.toastr.error(_this.msg.error, 'Oops!', { showCloseButton: true });
                        }
                        else {
                            _this.toastr.success('Pet Created!', 'Success!', { showCloseButton: true });
                            _this.router.navigate(['/pets/']);
                        }
                    });
                });
            });
        }
    };
    NewPetComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
                document.getElementById("preImage").style.backgroundImage = 'url(' + _this.url + ')';
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    NewPetComponent.prototype.refreshImages = function (status) {
        this.imgUp = status;
    };
    return NewPetComponent;
}());
NewPetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-pet',
        template: __webpack_require__("../../../../../src/app/home/pet/new-pet/new-pet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/pet/new-pet/new-pet.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_new_pet_service__["a" /* NewPetService */], __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_new_pet_service__["a" /* NewPetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_new_pet_service__["a" /* NewPetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], NewPetComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-pet.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/new-pet/shared/new-pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPetService = (function () {
    function NewPetService(socketManager) {
        this.socketManager = socketManager;
    }
    NewPetService.prototype.createPet = function (pet) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('create pet', pet).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    NewPetService.prototype.getPetBreed = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('all pet breeds', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    NewPetService.prototype.getPetSpecies = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('all pet species', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return NewPetService;
}());
NewPetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], NewPetService);

var _a;
//# sourceMappingURL=new-pet.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/petdetail/petdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    margin-top: 60px;\r\n    width: 100%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.control-label{\r\n    color: #583A98;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.psln-threeCol{\r\n    -webkit-column-count: 3;\r\n            column-count: 3;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 30px;\r\n}\r\n.psln-btnSave{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n}\r\n.psln-btnCancel{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #dc4468;\r\n    color: #fff;\r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.psln-btnFoot{\r\n    border-radius: 25px;\r\n    width: 150px;\r\n    margin-left: 5%;\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n/* Upload Image */\r\n\r\n.textInfo{\r\n    font-size: 12px;\r\n}\r\n.dragarea{\r\n    height: 280px;\r\n    border: 1px solid;\r\n    padding: 16%;\r\n    margin-top: 2%;\r\n    margin-left: 24%;\r\n    background-image:url('http://34.215.129.201:3000/assets/img/pets.jpg');   \r\n     background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.textLoad{\r\n    position: absolute;\r\n    margin-top: -82px;\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/petdetail/petdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\"> Pet Profile</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n   <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> / <span class=\"redirect\" routerLink=\"/pets\"> Pets </span>/ <span class=\"redirect\">Pet Profile</span>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <!-- Text input-->\r\n        <div class=\"psln-threeCol\">\r\n          <div class=\"form-group\"> \r\n            <div class=\"dragarea\" id=\"preImage\">\r\n                <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"4\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\r\n                  (change)=\"readUrl($event)\">\r\n                </app-file-upload>\r\n\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"name\">Name</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"name\" name=\"name\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.name\" placeholder=\"Name\" class=\"form-control input-md\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"intake\">Intake Date</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"intake\" name=\"intake\" type=\"date\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.intakeDate\" placeholder=\"Intake Date\"\r\n                class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"age\"> Age</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"age\" name=\"age\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.ageYears\" placeholder=\"Age\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n          <!-- Select input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Species\">Species</label>\r\n            <div class=\"col-md-8\">\r\n              <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"pet.PetSpeciesId\" [disabled]=\"is_edit\">\r\n                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <!-- Select input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Breed\">Breed</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Breed\" name=\"Breed\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.petBreed\" placeholder=\"Breed\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span> \r\n            </div>\r\n          </div>\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Color\">Color</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Color\" name=\"Color\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.color\" placeholder=\"Color\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"marking\">Special Markings</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"marking\" name=\"marking\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.specialMarkings\" placeholder=\"Special Markings\"\r\n                class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Weight\">Weight</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Weight\" name=\"Weight\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.weight\" placeholder=\"Weight\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Location\">Location</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"Location\" name=\"Location\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.location\" placeholder=\"Location\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"Status\">Status</label>\r\n            <div class=\"col-md-8\">\r\n              <select id=\"Status\" name=\"Status\" class=\"form-control\" [(ngModel)]=\"pet.status\" [disabled]=\"is_edit\">\r\n                <option value=\"Adoptables\">Adoptables</option>\r\n                <option value=\"Medical Hold\">Medical Hold</option>\r\n                <option value=\"Sanctuary\">Sanctuary</option>\r\n                <option value=\"Adopted\">Adopted</option>\r\n                <option value=\"Transferred\">Transferred</option>\r\n                <option value=\"Euthanized\">Euthanized</option>\r\n              </select>\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-4 control-label\" for=\"date\">Out Date</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"date\" name=\"date\" type=\"date\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.outOfDate\" placeholder=\"Out  Date\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-md-12\">\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n              <div class=\"col-md-2\">\r\n                  <label class=\"col-md-12 control-label\" for=\"Brand\">Food Brand<br> <span class=\"textInfo\">(Dietary Information)</span></label>  \r\n              </div> \r\n            <div class=\"col-md-8\">\r\n              <input id=\"Brand\" name=\"Brand\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodBrand\" placeholder=\"Brand\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"much\">How Many Cups of Food?</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"much\" name=\"much\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodAmount\" placeholder=\"How Many Cups of Food?\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Text input-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"often\">How Often</label>\r\n            <div class=\"col-md-8\">\r\n              <input id=\"often\" name=\"often\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodPerDay\" placeholder=\"How Often\" class=\"form-control input-md\">\r\n              <span class=\"help-block\"> </span>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Textarea -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"Instructions\">Instructions</label>\r\n            <div class=\"col-md-8\">\r\n              <textarea class=\"form-control\" id=\"Instructions\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.instructions\" name=\"Instructions\"> Description....</textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Multiple Radios (inline)  Organizar-->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"radios\">Special Needs</label>\r\n            <div class=\"col-md-8\">\r\n              <label class=\"radio-inline\" for=\"radios-0\">\r\n                <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"\" checked=\"checked\"> Yes\r\n              </label>\r\n              <label class=\"radio-inline\" for=\"radios-1\">\r\n                <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"\"> No\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Textarea -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"speneeds\"> </label>\r\n            <div class=\"col-md-8\">\r\n              <textarea class=\"form-control\" id=\"speneeds\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.textArea\" name=\"speneeds\">Description.... </textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Button (Double) -->\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12\" align=\"center\">\r\n              <a id=\"button1id\" name=\"button1id\" (click)=\"updatePet(pet)\" class=\"btn btn-lg  btn-default psln-btnSave\">{{btnEdit}}</a>\r\n              <a id=\"button2id\" name=\"button2id\" (click)=\"deletePet()\"   class=\"btn btn-lg  btn-default psln-btnCancel\">Delete</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"col-md-12 psln-divFoot\" align=\"center\">\r\n    <!--<a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> Documents</a>\r\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/notes.svg\" width=\"25\" height=\"25\"> Notes</a>\r\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\r\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> History</a>-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/pet/petdetail/petdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_petdetail_service__ = __webpack_require__("../../../../../src/app/home/pet/petdetail/shared/petdetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_pet_shared_new_pet_service__ = __webpack_require__("../../../../../src/app/home/pet/new-pet/shared/new-pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_socket_get_image_service__ = __webpack_require__("../../../../../src/app/shared/socket/get-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PetdetailComponent = (function () {
    function PetdetailComponent(petDetailServices, newPetServices, getImageService, fileUploadComponent, toastr, router, vcr) {
        this.petDetailServices = petDetailServices;
        this.newPetServices = newPetServices;
        this.getImageService = getImageService;
        this.fileUploadComponent = fileUploadComponent;
        this.toastr = toastr;
        this.router = router;
        this.pet = {};
        this.imgUp = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    PetdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgUp.name = "";
        this.pet.name = "";
        this.pet.intakeDate = "";
        this.pet.ageYears = "";
        this.pet.PetSpeciesId = "";
        this.pet.petBreed = "";
        this.pet.color = "";
        this.pet.specialMarkings = "";
        this.pet.weight = "";
        this.pet.location = "";
        this.pet.status = "";
        this.pet.foodBrand = "";
        this.pet.foodAmount = "";
        this.pet.foodPerDay = "";
        this.pet.instructions = "";
        this.pet.textArea = "";
        this.pet = JSON.parse(localStorage.getItem('pet'));
        this.uuid = this.pet.id;
        this.is_edit = true;
        this.btnEdit = "Edit Pet";
        if (this.pet.profileImage) {
            this.url = this.getImage(this.pet.profileImage);
        }
        else {
            this.url = '/assets/img/pets.jpg';
        }
        document.getElementById("preImage").style.backgroundImage = 'url(' + this.url + ')';
        this.newPetServices.getPetSpecies().subscribe(function (res) {
            _this.petSpecies = res;
            console.dir(res);
        });
    };
    PetdetailComponent.prototype.getImage = function (fileName) {
        return this.getImageService.getImage(fileName);
    };
    PetdetailComponent.prototype.deletePet = function () {
        var _this = this;
        var r = confirm("Delete Pet?");
        if (r == true) {
            this.petDetailServices.deletePet(this.uuid).subscribe(function (res) {
                console.dir(res);
                _this.toastr.success('Pet Delete!', 'Success!');
                _this.router.navigate(['/pets/']);
            });
        }
        else {
        }
    };
    PetdetailComponent.prototype.validateData = function (pet) {
        if (this.pet.instructions == "") {
            this.toastr.error('Required Instruction !', 'Oops!', { showCloseButton: true });
            document.getElementById("Instructions").focus();
            return false;
        }
        if (this.pet.foodPerDay == "") {
            this.toastr.error('Required Often!', 'Oops!', { showCloseButton: true });
            document.getElementById("often").focus();
            return false;
        }
        if (this.pet.foodAmount == "") {
            this.toastr.error('Required Much!', 'Oops!', { showCloseButton: true });
            document.getElementById("much").focus();
            return false;
        }
        if (this.pet.foodBrand == "") {
            this.toastr.error('Required Brand!', 'Oops!', { showCloseButton: true });
            document.getElementById("Brand").focus();
            return false;
        }
        if (this.pet.status == "") {
            this.toastr.error('Required Status!', 'Oops!', { showCloseButton: true });
            document.getElementById("Status").focus();
            return false;
        }
        if (this.pet.location == "") {
            this.toastr.error('Required Location!', 'Oops!', { showCloseButton: true });
            document.getElementById("Location").focus();
            return false;
        }
        if (this.pet.weight == "") {
            this.toastr.error('Required Weight!', 'Oops!', { showCloseButton: true });
            document.getElementById("Weight").focus();
            return false;
        }
        if (this.pet.specialMarkings == "") {
            this.toastr.error('Required Special Markings!', 'Oops!', { showCloseButton: true });
            document.getElementById("marking").focus();
            return false;
        }
        if (this.pet.color == "") {
            this.toastr.error('Required Color!', 'Oops!', { showCloseButton: true });
            document.getElementById("Color").focus();
            return false;
        }
        if (this.pet.petBreed == "") {
            this.toastr.error('Required Breed!', 'Oops!', { showCloseButton: true });
            document.getElementById("Breed").focus();
            return false;
        }
        if (this.pet.PetSpeciesId == "") {
            this.toastr.error('Required Species!', 'Oops!', { showCloseButton: true });
            document.getElementById("Species").focus();
            return false;
        }
        if (this.pet.ageYears == "") {
            this.toastr.error('Required Age!', 'Oops!', { showCloseButton: true });
            document.getElementById("age").focus();
            return false;
        }
        if (this.pet.name == "") {
            this.toastr.error('Required Name!', 'Oops!', { showCloseButton: true });
            document.getElementById("name").focus();
            return false;
        }
        if (this.pet.intakeDate == "") {
            this.toastr.error('Required Intake Date!', 'Oops!', { showCloseButton: true });
            document.getElementById("intake").focus();
            return false;
        }
        return true;
        // TODO  move all the below validations to here
    };
    PetdetailComponent.prototype.updatePet = function (pet) {
        var _this = this;
        if (this.btnEdit == "Edit Pet") {
            this.btnEdit = "Save Changes";
            this.is_edit = false;
        }
        else {
            pet.id = this.uuid;
            if (this.validateData(this.pet)) {
                this.toastr.info('Upload ', 'Loading');
                if (this.imgUp.name != "") {
                    this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                        result.subscribe(function (res) {
                            var url = res[0].url;
                            pet.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                            console.dir(pet);
                            _this.petDetailServices.updatePet(pet).subscribe(function (res) {
                                _this.msg = res;
                                if (_this.msg.error) {
                                    _this.toastr.error(_this.msg.error, 'Oops!');
                                }
                                else {
                                    _this.toastr.success('Pet Edit!', 'Success!');
                                }
                            });
                        });
                    });
                }
                else {
                    this.petDetailServices.updatePet(pet).subscribe(function (res) {
                        _this.msg = res;
                        if (_this.msg.error) {
                            _this.toastr.error(_this.msg.error, 'Oops!');
                        }
                        else {
                            _this.toastr.success('Pet Edit!', 'Success!');
                        }
                    });
                }
            }
        }
    };
    PetdetailComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
                document.getElementById("preImage").style.backgroundImage = 'url(' + _this.url + ')';
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    PetdetailComponent.prototype.refreshImages = function (status) {
        this.imgUp = status;
    };
    return PetdetailComponent;
}());
PetdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-petdetail',
        template: __webpack_require__("../../../../../src/app/home/pet/petdetail/petdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/pet/petdetail/petdetail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_socket_get_image_service__["a" /* GetImageService */], __WEBPACK_IMPORTED_MODULE_6__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_petdetail_service__["a" /* PetdetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_petdetail_service__["a" /* PetdetailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__new_pet_shared_new_pet_service__["a" /* NewPetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__new_pet_shared_new_pet_service__["a" /* NewPetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_socket_get_image_service__["a" /* GetImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_socket_get_image_service__["a" /* GetImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], PetdetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=petdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/petdetail/shared/petdetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetdetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetdetailService = (function () {
    function PetdetailService(socketManager) {
        this.socketManager = socketManager;
    }
    PetdetailService.prototype.updatePet = function (pet) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('update pet', pet).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    PetdetailService.prototype.deletePet = function (id) {
        var _this = this;
        console.log(id);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('delete pet', { id: id }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return PetdetailService;
}());
PetdetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], PetdetailService);

var _a;
//# sourceMappingURL=petdetail.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/pets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-active{\r\n    background-color: rgba(196, 245, 255, 0.47) !important;\r\n    color: #583A98 !important; \r\n    cursor: pointer;\r\n}\r\n.psln-navUsersText:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n    cursor: pointer;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    text-align: center;\r\n    text-align-last: center;\r\n    background-color: #583A98;\r\n    color: white;\r\n    font: inherit;\r\n    font-size: 18px;\r\n    /*Remove original arrow*/\r\n    -webkit-appearance: none;\r\n    /*Set the background of the button to our new arrow*/\r\n    background: url(http://34.215.129.201:3000/assets/img/arrow.svg) no-repeat 85% #583A98;\r\n    background-size: 20px;\r\n    height: 45px;\r\n}\r\n\r\n\r\nselect option{\r\n    background-color: white;\r\n    color: gray;\r\n}\r\n\r\n\r\n.addPet{\r\n    display: -webkit-inline-box;\r\n    position: relative;\r\n    margin-right: 10%;\r\n    margin-top: 1%;\r\n    z-index: 999;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff;  \r\n    margin-left: 10%;     \r\n    width: 200px;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    z-index: 999;\r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 11%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 400px;\r\n    padding-left: 4%; \r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\r\n    background-color: #fff;\r\n    background-size: 25px;\r\n    background-position: right;\r\n    background-position-x: 360px;\r\n}\r\n.psln-imgAsset{\r\n    padding-left: 10%;\r\n}\r\n.sub-text{\r\n    color: #583A98;\r\n    text-decoration: none;\r\n    padding-right: 4%;\r\n    font-size: 17px;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 7%;\r\n    height: 66px;\r\n    padding-top: 1.4%;\r\n    border-radius: 41px;    \r\n}\r\n\r\n.searchDiv{\r\n    margin-left: -57%;\r\n}\r\n.newPetDiv{\r\n    margin-left: 88%;\r\n}\r\n.dropdownFPP{\r\n    background-color: #fff;\r\n    height: 49px;\r\n    margin-top: -8px;\r\n    border-radius: 38px;\r\n}\r\n.psln-btnSearch{\r\n    border-radius: 25px;\r\n    border: 1px solid transparent;\r\n    color:#fff; \r\n    height: 45px;\r\n    width: 50px;\r\n    padding-left: 4%; \r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \r\n    background-size: 25px;\r\n    background-position: right;\r\n    background-position-x: 10px;\r\n}\r\n.col-md-psln{\r\n    width: 18%;\r\n    float: left;\r\n    margin-left: 0%;\r\n    margin-right: 47.8px;\r\n}\r\n\r\n#colSearch{\r\n    width: 7%;\r\n}\r\n#btnSearch{\r\n    margin-top: -7px;\r\n}\r\n.img-circle{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Pets</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n<span class=\"redirect\" routerLink=\"/home\">Dashboard </span>/ <span class=\"redirect\">Pets</span>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"addPet\"> \r\n        <div class=\"searchDiv\">\r\n            <form>\r\n                <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\"  [(ngModel)]=\"filter\" placeholder=\"Search by Pet´s Name, ID,Microchip ID...\">\r\n            </form>\r\n        </div>\r\n        <div class=\"newPetDiv\">\r\n            <a routerLink=\"/newPet\" class=\"btn btn-lg btn-block btn-default psln-btnNewPet\">Add New Pet<img class=\"psln-imgAsset\" src=\"assets/img/ADD.svg\" width=\"45\"></a>\r\n        </div>\r\n    </div>\r\n<div class=\"col-sm-4\">\r\n    <div class=\"container\">\r\n            <div class=\"container psln-navSearch\"> \r\n                    <div class=\"form-group\"> \r\n                        <div class=\"col-md-psln\">\r\n                            <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"filterBar.PetSpeciesId\">\r\n                                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\r\n                              </select>\r\n                        </div>\r\n                        <div class=\"col-md-psln\">\r\n                            <select id=\"Species\" name=\"breed\" class=\"form-control\" [(ngModel)]=\"filterBar.PetBreedId\">\r\n                                <option *ngFor=\"let breed of petBreed\" value=\"{{breed.id}}\">{{breed.name}}</option>\r\n                              </select>\r\n                        </div>\r\n                        <div class=\"col-md-psln\">\r\n                                <input type=\"search\" id=\"gender\"  [(ngModel)]=\"filterBar.gender\" name=\"selectbasic\" class=\"form-control dropdownFPP\" placeholder=\"Gender\"> \r\n                        </div>\r\n                        <div class=\"col-md-psln\">\r\n                                <input type=\"search\" id=\"age\"  [(ngModel)]=\"filterBar.ageYears\" name=\"selectbasic\" class=\"form-control dropdownFPP\" placeholder=\"Age\"> \r\n                        </div>\r\n                        <div class=\"col-md-psln\" id=\"colSearch\">\r\n                                <input type=\"button\" name=\"busqueda\" id=\"btnSearch\" class=\"psln-btnSearch\" placeholder=\" \">\r\n                        </div>\r\n                            \r\n                    </div> \r\n                </div>\r\n       <br>\r\n        <p class=\"lead\">Pets</p> \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\"> \r\n                <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\r\n                  <li><a class=\"psln-navUsersText2 psln-active\" id=\"all\" (click)=\"getPets()\">All</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"adoptable\" (click)=\"getByStatus('Adoptables')\">Adoptables</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"medical\" (click)=\"getByStatus('Medical Hold')\">Medical Hold</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"sanctuary\" (click)=\"getByStatus('Sanctuary')\">Sanctuary</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"adopted\" (click)=\"getByStatus('Adopted')\">Adopted</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"transferred\" (click)=\"getByStatus('Transferred')\">Transferred</a></li> \r\n                  <li><a class=\"psln-navUsersText2\" id=\"euthanized\" (click)=\"getByStatus('Euthanized')\">Euthanized</a></li> \r\n                </ul>\r\n            </div> \r\n        </div> \r\n    </div>\r\n</div>\r\n<div class=\"psln-contentGeneral\"> \r\n<div class=\"col-sm-8\" *ngFor=\"let pet of pets | petfilter:filter | petbarfilter:filterBar\" style=\"    float: right;\">\r\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\r\n        <div class=\"row\">\r\n            <div class=\"profile-header-container\" style=\"padding-top: 2%;\">   \r\n                <div class=\"profile-header-img\">\r\n                   <img class=\"img-circle\" [src]=\"getImage(pet.profileImage)\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 cta-contents\">\r\n                <div class=\"cta-desc\">\r\n                    <p><a class=\"sub-text\">Name:</a>{{pet.name}}</p>\r\n                    <p><a class=\"sub-text\">ID:</a>{{pet.id}}</p>\r\n                    <p><a class=\"sub-text\">Status:</a>{{pet.status}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 cta-button\">\r\n                <a   class=\"btn btn-lg btn-block btn-default psln-btnUser\" (click)=\"viewDetail(pet)\">View Profile</a>\r\n                <select class=\"form-control psln-btnActions\" name=\"selectbasic\" id=\"selectActionDropdown\">\r\n                    <option>Actions</option>\r\n                    <option>Transfer</option>\r\n                    <option>Return</option>\r\n                    <option>Post to Fpp</option>\r\n                    <option>Send to Animal Control</option>\r\n                </select>\r\n            </div>              \r\n         </div>\r\n    </div> \r\n</div> \r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/pets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_pet_service__ = __webpack_require__("../../../../../src/app/home/pet/pets/shared/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__ = __webpack_require__("../../../../../src/app/shared/socket/get-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pet__ = __webpack_require__("../../../../../src/app/home/pet/pets/shared/pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PetsComponent = (function () {
    function PetsComponent(petService, router, getImageService, toastr, vcr) {
        this.petService = petService;
        this.router = router;
        this.getImageService = getImageService;
        this.toastr = toastr;
        this.filterBar = new __WEBPACK_IMPORTED_MODULE_4__shared_pet__["a" /* Pet */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    PetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petService.getPets().subscribe(function (res) {
            _this.pets = res;
            console.dir(_this.pets);
        });
        this.petService.getSpecies().subscribe(function (res) {
            _this.petSpecies = res;
            console.dir(_this.petSpecies);
        });
        this.petService.getBreeds().subscribe(function (res) {
            _this.petBreed = res;
            console.dir(_this.petBreed);
        });
    };
    PetsComponent.prototype.getPets = function () {
        var _this = this;
        var clases = document.getElementsByClassName('psln-navUsersText2');
        for (var x = 0; x < clases.length; x++) {
            clases[x].classList.remove('psln-active');
        }
        document.getElementById('all').classList.add('psln-active');
        this.petService.getPets().subscribe(function (res) {
            _this.pets = res;
            console.dir(_this.pets);
        });
    };
    PetsComponent.prototype.getImage = function (fileName) {
        if (fileName) {
            return this.getImageService.getImage(fileName);
        }
        else {
            return '/assets/img/pets.jpg';
        }
    };
    PetsComponent.prototype.getByStatus = function (status) {
        var _this = this;
        this.toastr.info('Loading ', 'Loading');
        var clases = document.getElementsByClassName('psln-navUsersText2');
        for (var x = 0; x < clases.length; x++) {
            clases[x].classList.remove('psln-active');
        }
        if (status == 'Adoptables') {
            document.getElementById('adoptable').classList.add('psln-active');
        }
        if (status == 'Medical Hold') {
            document.getElementById('medical').classList.add('psln-active');
        }
        if (status == 'Sanctuary') {
            document.getElementById('sanctuary').classList.add('psln-active');
        }
        if (status == 'Adopted') {
            document.getElementById('adopted').classList.add('psln-active');
        }
        if (status == 'Transferred') {
            document.getElementById('transferred').classList.add('psln-active');
        }
        if (status == 'Euthanized') {
            document.getElementById('euthanized').classList.add('psln-active');
        }
        console.log(status);
        this.petService.getByStatus(status).subscribe(function (res) {
            _this.pets = res;
            console.dir(_this.pets);
        });
    };
    PetsComponent.prototype.viewDetail = function (pet) {
        console.dir(pet);
        localStorage.setItem('pet', JSON.stringify(pet));
        this.router.navigate(['/petdetail/']);
    };
    return PetsComponent;
}());
PetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pets',
        template: __webpack_require__("../../../../../src/app/home/pet/pets/pets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/pet/pets/pets.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_pet_service__["a" /* PetService */], __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], PetsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pets.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/shared/pet-bar-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetBarFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PetBarFilterPipe = (function () {
    function PetBarFilterPipe() {
    }
    PetBarFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Pet} pet The pet to compare to the filter.
     * @param {Pet} filter The filter to apply.
     * @return {boolean} True if pets satisfies filters, false if not.
     */
    PetBarFilterPipe.prototype.applyFilter = function (pet, filter) {
        if (filter.PetBreedId || filter.PetSpeciesId || filter.ageYears) {
            filter.PetBreedId = Number(filter.PetBreedId);
            filter.PetSpeciesId = Number(filter.PetSpeciesId);
            filter.ageYears = Number(filter.ageYears);
        }
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (pet[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (pet[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return PetBarFilterPipe;
}());
PetBarFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'petbarfilter',
        pure: false
    })
], PetBarFilterPipe);

//# sourceMappingURL=pet-bar-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/shared/pet-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PetFilterPipe = (function () {
    function PetFilterPipe() {
    }
    PetFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Pet} pet The pet to compare to the filter.
     * @param {Pet} filter The filter to apply.
     * @return {boolean} True if pets satisfies filters, false if not.
     */
    PetFilterPipe.prototype.applyFilter = function (pet, filter) {
        for (var key in filter) {
            if (pet['name'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1 && pet['id'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1) {
                // console.log(filter + " -> " + "No Encontre");
                return false;
            }
            else {
                ///console.log(key + " -> " + " Encontre");
            }
        }
        return true;
    };
    return PetFilterPipe;
}());
PetFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'petfilter',
        pure: false
    })
], PetFilterPipe);

//# sourceMappingURL=pet-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/shared/pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetService = (function () {
    function PetService(socketManager) {
        this.socketManager = socketManager;
    }
    PetService.prototype.getPets = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get my org pets', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    PetService.prototype.getSpecies = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('all pet species', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    PetService.prototype.getBreeds = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('all pet breeds', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    PetService.prototype.getByStatus = function (status) {
        var _this = this;
        console.log("Status Service", status);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get all pets by status', { status: status }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return PetService;
}());
PetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], PetService);

var _a;
//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/shared/pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
/**
 * Book entity, used for filtering as well.
 */
var Pet = (function () {
    function Pet() {
    }
    return Pet;
}());

//# sourceMappingURL=pet.js.map

/***/ }),

/***/ "../../../../../src/app/home/viewprofile/viewprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px;\r\n    padding-right: 9%;\r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    text-align: center;\r\n    font-family: latoCustom;\r\n}\r\n#psln-panel{\r\n    width: 75%;\r\n    float: right;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 48px;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n\r\n.titleOn{\r\n    color:#662D91;\r\n}\r\n.titleTw{\r\n    color:#662D91;\r\n}\r\n\r\n.tarProfile{\r\n    margin: 2%;\r\n    margin-top: -10px;\r\n}\r\n\r\n.cta-button{\r\n    display: -webkit-inline-box;\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n}\r\n\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/viewprofile/viewprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Dashboard</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\"> \r\n          <app-sidebar></app-sidebar>        \r\n      <div class=\"col-md-6\" id=\"psln-panel\">\r\n          <div class=\"panel\" id=\"psln-panelBody\">\r\n              <div class=\"panel-body\"> \r\n                  <div class=\"row tarProfile\">        \r\n                      <h1 class=\"titleOn\">Revolution Rescue</h1>\r\n                      <h4 class=\"titleTw\">Member Since 2017. Lincoln,NE</h4>\r\n                      <h4>About Us</h4>\r\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                      </p>\r\n                      <h4>Mission</h4>\r\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \r\n                      </p>\r\n                      <div class=\"cta-button\">\r\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Edit</a>\r\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Cancel</a>\r\n                    </div>  \r\n                  </div>                     \r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n  <div class=\"container\">\r\n      <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n      <a class=\"display-4 psln-btnContact\">Contact Us</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/viewprofile/viewprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewprofileComponent = (function () {
    function ViewprofileComponent() {
    }
    ViewprofileComponent.prototype.ngOnInit = function () {
    };
    return ViewprofileComponent;
}());
ViewprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-viewprofile',
        template: __webpack_require__("../../../../../src/app/home/viewprofile/viewprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/viewprofile/viewprofile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewprofileComponent);

//# sourceMappingURL=viewprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/wait-list/wait-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}\r\n\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/wait-list/wait-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Wait List</h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard </span> / <span class=\"redirect\">Wait List</span> \r\n  </nav>\r\n  <div class=\"container psln-navSearch\"> \r\n    <div class=\"form-group\"> \r\n        <div class=\"col-md-3\">\r\n            <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n            <option value=\"1\">Option one</option>\r\n            <option value=\"2\">Option two</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                <option value=\"1\">Option one</option>\r\n                <option value=\"2\">Option two</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                <option value=\"1\">Option one</option>\r\n                <option value=\"2\">Option two</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                <option value=\"1\">Option one</option>\r\n                <option value=\"2\">Option two</option>\r\n                </select>\r\n        </div>\r\n            \r\n    </div> \r\n  </div>\r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    \t<div class=\"row\">                        \r\n              <div class=\"col-md-12\"> \r\n              <div class=\"table-responsive\">\r\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                     <thead>\r\n                      <th> </th>\r\n                      <th>Name</th>\r\n                      <th>Species</th>\r\n                      <th>Breed</th>\r\n                      <th>Date</th>\r\n                      <th>Manage</th> \r\n                     </thead>\r\n      <tbody>          \r\n      <tr>\r\n          <td>1</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n          \r\n       <tr>\r\n          <td>2</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>3</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n          \r\n       <tr>\r\n          <td>4</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>5</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\r\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n          </tr>\r\n          \r\n         \r\n          \r\n         \r\n          \r\n      </tbody>\r\n              \r\n      </table>\r\n                      \r\n                  </div>\r\n                  \r\n              </div>\r\n        </div>\r\n       \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/wait-list/wait-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaitListComponent = (function () {
    function WaitListComponent() {
    }
    WaitListComponent.prototype.ngOnInit = function () {
    };
    return WaitListComponent;
}());
WaitListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wait-list',
        template: __webpack_require__("../../../../../src/app/home/wait-list/wait-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/wait-list/wait-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WaitListComponent);

//# sourceMappingURL=wait-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    position: relative;\r\n    min-height: 50px;\r\n    margin-bottom: 0px !important;\r\n    border: 1px solid transparent;\r\n  }\r\n  .login-wrapper {\r\n      height: 100%;\r\n  }\r\n  .login-wrapper > * {\r\n    height: 100%;\r\n  }\r\n  .login-wrapper .bg-pic {\r\n    position: absolute;\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n  .login-wrapper .bg-pic > img {\r\n    height: 100%;\r\n    opacity: 0.6;\r\n  }\r\n  .login-wrapper .login-container {\r\n    width: 496px;\r\n    display: block;\r\n    position: relative;\r\n    float: right;\r\n  }\r\n  .login-wrapper .bg-caption {\r\n    width: 500px;\r\n  }\r\n  .register-container {\r\n    width: 550px;\r\n    margin: auto;\r\n    height: 100%;\r\n  }\r\n  /* Responsive handlers : Login\r\n  ------------------------------------\r\n  */\r\n  @media (max-width: 768px) {\r\n    .login-wrapper .login-container {\r\n      width: 100%;\r\n    }\r\n    .register-container {\r\n      width: 100%;\r\n      padding: 15px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 321px) {\r\n    .login-wrapper .login-container {\r\n      width: 100%;\r\n    }\r\n  }\r\n.psln-navbarTop{\r\n  display: none;\r\n}\r\n.lazy{\r\n  width: 100%;\r\n}\r\n.p-t-35{\r\n  font-size: 1.3em;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  color: rgba(19, 17, 30, 0.74);\r\n}\r\n.bLogin{\r\n  background-color: #462e68;\r\n  border-color: #67498e;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper \">\r\n  <!-- START Login Background Pic Wrapper-->\r\n  <div class=\"bg-pic\">\r\n    <!-- START Background Pic-->\r\n    <img src=\"assets/img/Login.jpg\" data-src=\"assets/img/Login.jpg\" data-src-retina=\"assets/img/Login.jpg\" alt=\"\" class=\"lazy\">\r\n    <!-- END Background Pic-->\r\n    <!-- START Background Caption-->\r\n    <div class=\"bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20\">\r\n      <h2 class=\"semi-bold text-white\">\r\n      Sharing is Caring FPPSASS</h2>\r\n<!--\t\t\t\r\n      <p class=\"small\">\r\n        Automatically analyze web content to determine topic relevancy, identify topical gaps, and find new opportunities.\r\n      </p>\r\n-->  \r\n    </div>\r\n    <!-- END Background Caption-->\r\n  </div>\r\n  <!-- END Login Background Pic Wrapper-->\r\n  <!-- START Login Right Container-->\r\n  <div class=\"login-container bg-white\" style=\"padding: 7%;\"> \r\n    <div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\r\n  \r\n      <img src=\"assets/img/fpp.svg\" alt=\"logo\" data-src=\"assets/img/fpp.svg\" data-src-retina=\"assets/img/fpp.svg\" width=\"78\" height=\"22\" style=\"width: 70px; height: 70px;\">\r\n \r\n      <p class=\"p-t-35\">Sign into FPPSASS</p>\r\n      <!-- START Login Form -->\r\n      <form id=\"form-login\" class=\"p-t-15\" >\r\n        <!-- START Form Control-->\r\n        <div class=\"form-group form-group-default\">\r\n          <label>LOGIN</label>\r\n          <div class=\"controls\">\r\n            <input  name=\"email\" type=\"email\"  tabindex=\"1\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"email\" required=\"\" autofocus=\"\" value=\"\" required>\r\n           </div>\r\n        </div>\r\n        <!-- END Form Control-->\r\n        <!-- START Form Control-->\r\n        <div class=\"form-group form-group-default\">\r\n          <label>PASSWORD</label>\r\n          <div class=\"controls\">\r\n            <input   name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"inputPassword\" required=\"\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <!-- START Form Control\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 no-padding\">\r\n            <div class=\"checkbox \">\r\n              <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\r\n              <label for=\"checkbox1\">Keep Me Signed in</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 text-right\">\r\n            <a routerLink=\"#\" class=\"text-info small\">Help? Contact Support</a>\r\n          </div>\r\n        </div>\r\n        END Form Control-->\r\n        <a  (click)=\"submitLogin()\"  style=\"float:right\" name=\"login-submit\" id=\"login-submit\"  tabindex=\"4\" value=\"Sign In\" class=\"btn btn-primary btn-cons m-t-10 bLogin\">Sign in</a>\r\n      </form>\r\n      <!--END Login Form-->\r\n      <div class=\"pull-bottom sm-pull-bottom\">\r\n        <div class=\"m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\r\n          <div class=\"col-sm-3 col-md-2 no-padding\">\r\n            \r\n          </div>\r\n          <div class=\"col-sm-9 no-padding m-t-10\">\r\n            <p>\r\n              <small>\r\n             Using FPPSASS keeping pets happy is easy! \r\n            </small>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END Login Right Container-->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(socketService, router) {
        this.socketService = socketService;
        this.router = router;
        this.loginStatus = 'Not Logged In Sorry';
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.socketService.login(this.username, this.password, null).
            then(function (resolve) {
            _this.loginStatus = 'Success login';
            _this.router.navigate(['/home']);
            console.log(_this.loginStatus);
        }, function (reject) {
            _this.loginStatus = 'Success login... nope';
            console.log(reject);
        }).
            catch(function (err) { return console.log(' crazy error everybody ', err); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer { background-color:#333433; min-height:200px; font-family: 'Open Sans', sans-serif; }\r\n.footerleft { margin-top:50px; padding:0 36px; }\r\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\r\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\r\n.footerleft p i { width:20px; color:#999;}\r\n.paddingtop-bottom {  margin-top:50px;}\r\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\r\n.footer-ul li { line-height:29px; font-size:12px;}\r\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\r\n.footer-ul i { margin-right:10px;}\r\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\r\n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\r\n .icon-ul li { line-height:75px; width:100%; float:left;}\r\n .icon { float:left; margin-right:5px;}\r\n .copyright { min-height:90px; background-color:#242724;}\r\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\r\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\r\n .post p { font-size:12px; color:#FFF; line-height:20px;}\r\n .post p span { display:block; color:#8f8f8f;}\r\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\r\n .bottom_ul li { float:left; line-height:40px;}\r\n .bottom_ul li:after { content:\" \"; color:#FFF; margin-right:8px; margin-left:8px;}\r\n .bottom_ul li a { color:#FFF;  font-size:12px;}\r\n .psln-textFoot{color: #9d9d9d;font-size: 1.1em; line-height: 2; text-decoration: none;}\r\n .psln-footerBottom{width: 25px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--footer start from here-->\r\n  <footer *ngIf=\"!isLogin\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-sm-6 footerleft \">\r\n            <div class=\"logofooter\"> </div>\r\n            \r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\r\n             \r\n          </div>\r\n          <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\r\n     \r\n          </div>\r\n          <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\r\n            <div class=\"fb-page\" data-routerLink=\"https://www.facebook.com/facebook\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\" style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\r\n              <div class=\"fb-xfbml-parse-ignore\">               \r\n                  <a class=\"psln-textFoot\">support@familypetproject.com</a><br>\r\n                  <a class=\"psln-textFoot\">+1 565-879-955</a><br>\r\n                  <a class=\"psln-textFoot\">Lincoln, NE</a>               \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n    <!--footer start from here-->\r\n    \r\n    <div class=\"copyright\" *ngIf=\"!isLogin\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-6\">\r\n          <p>© 2014Family Pet Project. All Rights Reserved. v1.0</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"bottom_ul\">\r\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/facebook.svg\"></a></li>\r\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/instagram.svg\"></a></li>\r\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/twitter.svg\"></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/nav/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url == '/register' || this.router.url == '/') {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
        this.router.events.subscribe(function (event) {
            _this.isLogin = (event.url == '/register' || event.url == '/');
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/nav/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-navbarTop{\r\n    background-color: #fff;\r\n    border-color: #fff;\r\n    height: 80px;\r\n    z-index: 99999;\r\n}\r\n.psln-nav{\r\n    margin-top: 1%;\r\n}\r\n.psln-navHeader{\r\n    margin-top: 1%;\r\n}\r\n.psln-btn:hover{\r\n    color: #4E196E;\r\n}\r\n.psln-home:focus, .psln-home:hover , .psln-home:active{\r\n    border: 2px solid #4E196E;\r\n    color:#4E196E !important;\r\n} \r\n.psln-contact:focus, .psln-contact:hover , .psln-contact:active{\r\n    border: 2px solid #2399A6;\r\n    color:#2399A6 !important;\r\n} \r\n.psln-tools:focus, .psln-tools:hover , .psln-tools:active{\r\n    border: 2px solid #B11C1C;\r\n    color:#B11C1C !important;\r\n} \r\n.psln-users:focus, .psln-users:hover , .psln-users:active{\r\n    border: 2px solid #2121D2;\r\n    color:#2121D2 !important;\r\n} \r\n.psln-home{    \r\n    padding-right: 15%;\r\n    font-size: 18px;\r\n    color: #8f908e;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    padding: 12px 33px;\r\n    width: 130px;\r\n    margin-bottom: 0;\r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 31px;\r\n}\r\n.psln-contact{    \r\n    padding-right: 15%;\r\n    font-size: 18px;\r\n    color: #8f908e;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    padding: 12px 33px;\r\n    width: 130px;\r\n    margin-bottom: 0;\r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 31px;\r\n}\r\n.psln-tools{    \r\n    padding-right: 15%;\r\n    font-size: 18px;\r\n    color: #8f908e;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    padding: 12px 33px;\r\n    width: 130px;\r\n    margin-bottom: 0;\r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 31px;\r\n}\r\n.psln-users{ \r\n    padding-right: 15%;\r\n    font-size: 18px;\r\n    color: #8f908e;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    padding: 12px 33px;\r\n    width: 130px;\r\n    margin-bottom: 0;\r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 31px;\r\n}\r\n.psln-logo{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/logoIcon.svg');background-repeat: no-repeat;background-size: cover ; \r\n    width: 55px;\r\n    height: 55px;\r\n}\r\n.psln-userInfo{  \r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.navbar-inverse .navbar-toggle {\r\n    border-color: #333;\r\n    background-color: #333;\r\n}\r\n\r\n\r\n\r\n@media (max-width:755px) {\r\n    \r\n    .navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\r\n        background-color: #fff;\r\n        border-color: #fff;\r\n    } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top psln-navbarTop\" *ngIf=\"!isLogin\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header psln-navHeader\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand psln-logo\" routerLink=\"\"></a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"collapse navbar-collapse  psln-nav\">\r\n        <ul class=\"nav navbar-nav navbar-right\"  >\r\n            <li><a class=\"psln-home\" routerLink=\"/home\">Home</a></li>\r\n            <li><a class=\"psln-contact\" routerLink=\"/contact\">Contact</a></li>\r\n            <li><a class=\"psln-tools\" routerLink=\"/tools\">Tools</a></li>\r\n            <li><a class=\"psln-users\" routerLink=\"/user\">Users</a></li>\r\n            <li style=\"    top: -15px;\"><a routerLink=\"/Portal/Volunteer\"><img class=\"psln-userInfo\" src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\"></a></li> \r\n        </ul>\r\n      </div><!--/.navbar-collapse -->\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/nav/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url == '/register' || this.router.url == '/') {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
        this.router.events.subscribe(function (event) {
            _this.isLogin = (event.url == '/register' || event.url == '/');
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/nav/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* Profile container */\r\n.profile {\r\n    margin: 14% 3%;\r\n    position: absolute;\r\n    top: 0%;\r\n    z-index: 999;\r\n  }\r\n  \r\n  /* Profile sidebar */\r\n  .profile-sidebar {\r\n    padding: 6px 0 0 0;\r\n    background: #159DA7;\r\n    border-radius: 122px 122px 15px 15px;\r\n    border: 5px solid white;\r\n  }\r\n  \r\n  .profile-userpic img {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    height: 80%;\r\n    border-radius: 50% !important;\r\n    border: 4px solid white;\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  .profile-usertitle {\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    border-bottom: 2px solid rgba(214, 207, 207, 0.45);\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n  }\r\n  \r\n  .profile-usertitle-name {\r\n    color: #1c9ca5;\r\n    font-size: 12px;\r\n    margin-bottom: 7px;\r\n    background-color: #fff;\r\n    border-radius: 22px;\r\n    padding: 10px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .profile-back {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    margin-bottom: 7px;\r\n    background-color: #662D91;\r\n    border-radius: 22px;\r\n    padding: 10px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .profile-usertitle-job {\r\n    text-transform: uppercase;\r\n    color: #5b9bd1;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .profile-userbuttons {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .profile-userbuttons .btn {\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    padding: 6px 15px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .profile-userbuttons .btn:last-child {\r\n    margin-right: 0px;\r\n  }\r\n      \r\n  .profile-usermenu { \r\n  }\r\n   \r\n  \r\n  .profile-usermenu ul li:last-child {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu ul li a {\r\n    color: #fff;\r\n    font-size: 17px;\r\n    font-weight: 400;\r\n    padding-left: 17%;\r\n  }\r\n  \r\n  .profile-usermenu ul li a i {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .profile-usermenu ul li a:hover { \r\n    background-color:#1c9ca5;\r\n  }\r\n  \r\n  .profile-usermenu ul li.active {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu ul li.active a {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n  \r\n  /* Profile Content */\r\n  .profile-content {\r\n    padding: 20px;\r\n    background: #fff;\r\n    min-height: 460px;\r\n  }\r\n\r\n  \r\ninput[type=checkbox] {\r\n  visibility: hidden;\r\n}\r\n\r\n.iconToggle{\r\n  display: none;\r\n}\r\n/* SLIDE THREE */\r\n.slideThree {\r\n  width: 130px;\r\n  height: 33px;\r\n  background: #006C74;\r\n  margin: 20px auto;\r\n  border-radius: 70px;\r\n  position: relative;\r\n  box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);\r\n}\r\n\r\n.slideThree:after {\r\n  content: ' ';\r\n  font: 15px/30px Arial, sans-serif;\r\n  color: #fff;\r\n  position: absolute;\r\n  right: 42px;\r\n  z-index: 0;\r\n  font-weight: bold; \r\n}\r\n\r\n.slideThree:before {\r\n  content: '';\r\n  font: 15px/30px Arial, sans-serif;\r\n  color: #fff;\r\n  position: absolute;\r\n  left: 40px;\r\n  z-index: 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.slideThree label {\r\n  display: block;\r\n  width: 33px;\r\n  height: 33px;\r\n  border-radius: 50px;\r\n  transition: all .4s ease;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: -1px;\r\n  z-index: 1;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);\r\n  background: #fcfff4;\r\n\r\n}\r\n\r\n.slideThree input[type=checkbox]:checked + label {\r\n\tleft: 105px;\r\n}\r\n\r\n@media (max-width:992px) { \r\n  .profile{\r\n    display: none;\r\n  }\r\n  .iconToggle{\r\n    display: inline-block;\r\n    float: left;\r\n    position: fixed;\r\n    z-index: 999999999;\r\n    left: 0;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n  }\r\n  \r\n  #rowProfile{\r\n    z-index: 99999999;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row profile\" id=\"rowProfile\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"profile-sidebar\">\r\n\t\t\t\t<!-- SIDEBAR USERPIC -->\r\n\t\t\t\t<div class=\"profile-userpic\">\r\n\t\t\t\t\t<img src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\" class=\"img-responsive\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USERPIC -->\r\n\t\t\t\t<!-- SIDEBAR USER TITLE -->\r\n\t\t\t\t<div class=\"profile-usertitle\">\r\n\t\t\t\t\t<div class=\"{{cssOpt}}\">\r\n\t\t\t\t\t\t<a style=\"text-decoration: none\" id=\"textOpt\" routerLink=\"{{urlOpt}}\">View Profile</a>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USER TITLE -->\r\n\t\t\t\t<!-- SIDEBAR BUTTONS -->\r\n\t\t\t\t<div class=\"profile-userbuttons\">\r\n\t\t\t\t\t<div class=\"slideThree\" id=\"slideL\">\t\r\n\t\t\t\t\t\t<input type=\"checkbox\" value=\"None\" id=\"slideThree\" name=\"check\" (change)=\"changeCheck($event)\" />\r\n\t\t\t\t\t\t<label for=\"slideThree\" id=\"slideT\"></label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR BUTTONS -->\r\n\t\t\t\t<!-- SIDEBAR MENU -->\r\n\t\t\t\t<div class=\"profile-usermenu\">\r\n\t\t\t\t\t<ul class=\"nav\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Intake   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Adopted   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Transfered   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Medical Hold   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Sanctuary   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a>Euthanized   :90 </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END MENU -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"iconToggle\">\r\n\t\t<a style=\"text-decoration:none\"  (click)=\"displayProfile()\">{{option}} </a>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/nav/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.option = "Profile";
        var content = document.head.appendChild(document.createElement("style"));
        content.innerHTML = ".slideThree[_ngcontent-c4]:after {content: '2017';}";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.option = "Profile";
        if (this.router.url == '/profile') {
            this.cssOpt = "profile-back";
            var text = document.getElementById("textOpt");
            text.innerHTML = "Back";
            text.style.color = "#fff";
            this.urlOpt = "/home";
        }
        else {
            this.cssOpt = "profile-usertitle-name";
            this.urlOpt = "/profile";
        }
        var content = document.head.appendChild(document.createElement("style"));
        content.innerHTML = ".slideThree[_ngcontent-c4]:after {content: '2017';}";
    };
    SidebarComponent.prototype.changeCheck = function (val) {
        if (val.target.checked) {
            var content = document.head.appendChild(document.createElement("style"));
            content.innerHTML = ".slideThree[_ngcontent-c4]:after {content: 'All Time';}";
            console.log(1);
        }
        else {
            console.log(2);
            var content = document.head.appendChild(document.createElement("style"));
            content.innerHTML = ".slideThree[_ngcontent-c4]:after {content: '2017';}";
        }
    };
    SidebarComponent.prototype.displayProfile = function () {
        if (this.option == "Profile") {
            this.option = "Close";
            document.getElementById("rowProfile").style.display = "inherit";
        }
        else if (this.option == "Close") {
            this.option = "Profile";
            document.getElementById("rowProfile").style.display = "none";
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/nav/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-history/portal-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-history/portal-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Volunteer History </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / Volunteer History\r\n</nav>\r\n\r\n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    <div class=\"row\">                        \r\n            <div class=\"col-md-12\"> \r\n            <div class=\"table-responsive\">\r\n                  <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                   <thead>\r\n                    <th> </th>\r\n                    <th>Name</th>\r\n                    <th>Species</th>\r\n                    <th>Breed</th>\r\n                    <th>Date</th>\r\n                    <th>Manage</th> \r\n                   </thead>\r\n    <tbody>          \r\n    <tr>\r\n        <td>1</td>\r\n        <td>Mohsin</td>\r\n        <td>Irshad</td>\r\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n        <td>isometric.mohsin@gmail.com</td> \r\n    </tr>\r\n        \r\n     <tr>\r\n        <td>2</td>\r\n        <td>Mohsin</td>\r\n        <td>Irshad</td>\r\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n        <td>isometric.mohsin@gmail.com</td> \r\n        </tr>\r\n        \r\n        \r\n     <tr>\r\n        <td>3</td>\r\n        <td>Mohsin</td>\r\n        <td>Irshad</td>\r\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n        <td>isometric.mohsin@gmail.com</td> \r\n        </tr>\r\n        \r\n        \r\n        \r\n     <tr>\r\n        <td>4</td>\r\n        <td>Mohsin</td>\r\n        <td>Irshad</td>\r\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n        <td>isometric.mohsin@gmail.com</td> \r\n        </tr>\r\n        \r\n        \r\n     <tr>\r\n        <td>5</td>\r\n        <td>Mohsin</td>\r\n        <td>Irshad</td>\r\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n        <td>isometric.mohsin@gmail.com</td> \r\n        </tr>\r\n        \r\n       \r\n        \r\n       \r\n        \r\n    </tbody>\r\n            \r\n    </table>\r\n                    \r\n                </div>\r\n                \r\n            </div>\r\n      </div>\r\n     \r\n         \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-history/portal-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalHistoryComponent = (function () {
    function PortalHistoryComponent() {
    }
    PortalHistoryComponent.prototype.ngOnInit = function () {
    };
    return PortalHistoryComponent;
}());
PortalHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-history',
        template: __webpack_require__("../../../../../src/app/portal/portal-history/portal-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-history/portal-history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalHistoryComponent);

//# sourceMappingURL=portal-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-hours/portal-hours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    color: #fff;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\r\n    background-color: #583A98;\r\n    background-size: 25px;\r\n    background-position: left;\r\n    background-position-x: 10px;\r\n    width: 103px;\r\n    padding-left: 13%;\r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%\r\n}\r\n.lead{\r\n    color: #583A98;\r\n}\r\n.psln-option{\r\n    height: 44px;\r\n    border-radius: 21px;\r\n    border: none;\r\n}\r\n.psln-rightNav{\r\n    float: right;\r\n}\r\n.psln-twoCol{ \r\n    margin-top:8%;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-hours/portal-hours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Hours Worked   </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / Hours Worked\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <br>   \r\n</div> \r\n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n  <div class=\"col-md-12\">  \r\n      <div class=\"psln-rightNav\">\r\n          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">Hous worked this Month</a> \r\n      </div>\r\n      <div class=\"row\">                        \r\n          <div class=\"col-md-12\"> \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>               \r\n          </div>\r\n    </div>\r\n  </div>     \r\n         \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-hours/portal-hours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalHoursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalHoursComponent = (function () {
    function PortalHoursComponent() {
    }
    PortalHoursComponent.prototype.ngOnInit = function () {
    };
    return PortalHoursComponent;
}());
PortalHoursComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-hours',
        template: __webpack_require__("../../../../../src/app/portal/portal-hours/portal-hours.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-hours/portal-hours.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalHoursComponent);

//# sourceMappingURL=portal-hours.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-history/portal-my-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-history/portal-my-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Volunteer History   </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / Volunteer History\r\n</nav> <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    <div class=\"row\">                        \r\n          <div class=\"col-md-12\"> \r\n          <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                 <thead>\r\n                  <th> </th>\r\n                  <th>Name</th>\r\n                  <th>Species</th>\r\n                  <th>Breed</th>\r\n                  <th>Date</th>\r\n                  <th>Manage</th> \r\n                 </thead>\r\n  <tbody>          \r\n  <tr>\r\n      <td>1</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n  </tr>\r\n      \r\n   <tr>\r\n      <td>2</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n   <tr>\r\n      <td>3</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n      \r\n   <tr>\r\n      <td>4</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n   <tr>\r\n      <td>5</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n     \r\n      \r\n     \r\n      \r\n  </tbody>\r\n          \r\n  </table>\r\n                  \r\n              </div>\r\n              \r\n          </div>\r\n    </div>\r\n   \r\n       \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-history/portal-my-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalMyHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalMyHistoryComponent = (function () {
    function PortalMyHistoryComponent() {
    }
    PortalMyHistoryComponent.prototype.ngOnInit = function () {
    };
    return PortalMyHistoryComponent;
}());
PortalMyHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-my-history',
        template: __webpack_require__("../../../../../src/app/portal/portal-my-history/portal-my-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-my-history/portal-my-history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalMyHistoryComponent);

//# sourceMappingURL=portal-my-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">My Messages    </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / My Messages\r\n</nav>\r\n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    <div class=\"row\">                        \r\n          <div class=\"col-md-12\"> \r\n          <div class=\"table-responsive\">\r\n                <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                 <thead>\r\n                  <th> </th>\r\n                  <th>Name</th>\r\n                  <th>Species</th>\r\n                  <th>Breed</th>\r\n                  <th>Date</th>\r\n                  <th>Manage</th> \r\n                 </thead>\r\n  <tbody>          \r\n  <tr>\r\n      <td>1</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n  </tr>\r\n      \r\n   <tr>\r\n      <td>2</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n   <tr>\r\n      <td>3</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n      \r\n   <tr>\r\n      <td>4</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n      \r\n   <tr>\r\n      <td>5</td>\r\n      <td>Mohsin</td>\r\n      <td>Irshad</td>\r\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n      <td>isometric.mohsin@gmail.com</td>\r\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \r\n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\r\n      </tr>\r\n      \r\n     \r\n      \r\n     \r\n      \r\n  </tbody>\r\n          \r\n  </table>\r\n                  \r\n              </div>\r\n              \r\n          </div>\r\n    </div>\r\n   \r\n       \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalMyMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalMyMessagesComponent = (function () {
    function PortalMyMessagesComponent() {
    }
    PortalMyMessagesComponent.prototype.ngOnInit = function () {
    };
    return PortalMyMessagesComponent;
}());
PortalMyMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-my-messages',
        template: __webpack_require__("../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalMyMessagesComponent);

//# sourceMappingURL=portal-my-messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">My Organizations    </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / My Organizations\r\n</nav>\r\n<div class=\"container\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\r\n        <div class=\"row\">\r\n            <div class=\"profile-header-container\" style=\"padding-top: 15%;\">   \r\n                <div class=\"profile-header-img\">\r\n                   <img class=\"img-circle\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 cta-contents\">\r\n                <div class=\"cta-desc\">\r\n                    <p>Describe the action here.</p>\r\n                    <p>Describe the action here.</p>\r\n                    <p>Describe the action here.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 cta-button\">\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Go for It!</a>\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Go for It!</a>\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Go for It!</a>\r\n            </div>              \r\n         </div>\r\n    </div> \r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalMyOrganizationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalMyOrganizationsComponent = (function () {
    function PortalMyOrganizationsComponent() {
    }
    PortalMyOrganizationsComponent.prototype.ngOnInit = function () {
    };
    return PortalMyOrganizationsComponent;
}());
PortalMyOrganizationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-my-organizations',
        template: __webpack_require__("../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalMyOrganizationsComponent);

//# sourceMappingURL=portal-my-organizations.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Oportunities   </h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\nDashboard / Volunteer Oportunities\r\n</nav>\r\n<div class=\"container\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\r\n        <div class=\"row\">\r\n            <div class=\"profile-header-container\" style=\"padding-top: 15%;\">   \r\n                <div class=\"profile-header-img\">\r\n                   <img class=\"img-circle\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 cta-contents\">\r\n                <div class=\"cta-desc\">\r\n                    <p>Describe the action here.</p>\r\n                    <p>Describe the action here.</p>\r\n                    <p>Describe the action here.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 cta-button\">\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Go for It!</a>\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Go for It!</a>\r\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Go for It!</a>\r\n            </div>              \r\n         </div>\r\n    </div> \r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalMyVolunteerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalMyVolunteerComponent = (function () {
    function PortalMyVolunteerComponent() {
    }
    PortalMyVolunteerComponent.prototype.ngOnInit = function () {
    };
    return PortalMyVolunteerComponent;
}());
PortalMyVolunteerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-my-volunteer',
        template: __webpack_require__("../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalMyVolunteerComponent);

//# sourceMappingURL=portal-my-volunteer.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n    margin-top:12%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px;\r\n    padding-right: 1%;\r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    font-family: latoCustom; \r\n    text-align: -webkit-center;\r\n    display: -webkit-box;\r\n    margin-right: 26%;\r\n}\r\n#psln-panel{\r\n    width: 100%;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 3em;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 1.8em;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n.imgCustom{\r\n    max-width: 66%;\r\n}\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n    .imgCustom{\r\n        max-width: 90%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width:1200px) {   \r\n    .psln-text{ \r\n        margin-right: 9%;\r\n    }\r\n  }\r\n  @media (max-width:725px) {   \r\n    .psln-text{ \r\n        margin-right: 1%;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Portal</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">       \r\n      <div class=\"col-md-6\" id=\"psln-panel\">\r\n          <div class=\"panel\" id=\"psln-panelBody\">\r\n              <div class=\"panel-body\"> \r\n                  <div class=\"row\">        \r\n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\r\n                          <a routerLink=\"/Portal/Volunteers\"><img src=\"assets/img/volunteerOportunities.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">Volunteer Oportunities</span>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter sprinkle\">\r\n                        <a routerLink=\"/Portal/Messages\"><img src=\"assets/img/mymessages.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">My Messages</span>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\r\n                        <a routerLink=\"/Portal/MyHistory\"><img src=\"assets/img/history.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">Volunteer History</span>\r\n                      </div>           \r\n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\r\n                        <a routerLink=\"/Portal/MyOrganizations\"><img src=\"assets/img/myorgs.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">My Organizations</span>\r\n                      </div>    \r\n                  </div>                     \r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n  <div class=\"container\">\r\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n        <a class=\"display-4 psln-btnContact\">Join the Team        </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalOpportunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalOpportunitiesComponent = (function () {
    function PortalOpportunitiesComponent() {
    }
    PortalOpportunitiesComponent.prototype.ngOnInit = function () {
    };
    return PortalOpportunitiesComponent;
}());
PortalOpportunitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-opportunities',
        template: __webpack_require__("../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalOpportunitiesComponent);

//# sourceMappingURL=portal-opportunities.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n    margin-top:12%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px;\r\n    padding-right: 1%;\r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    font-family: latoCustom; \r\n    text-align: -webkit-center;\r\n    display: -webkit-box;\r\n    margin-right: 26%;\r\n}\r\n#psln-panel{\r\n    width: 100%;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 3em;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 1.8em;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n\r\n.imgCustom{\r\n    max-width: 66%;\r\n}\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n    .imgCustom{\r\n        max-width: 90%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width:1200px) {   \r\n    .psln-text{ \r\n        margin-right: 9%;\r\n    }\r\n  }\r\n  @media (max-width:725px) {   \r\n    .psln-text{ \r\n        margin-right: 1%;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Portal</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">       \r\n      <div class=\"col-md-6\" id=\"psln-panel\">\r\n          <div class=\"panel\" id=\"psln-panelBody\">\r\n              <div class=\"panel-body\"> \r\n                  <div class=\"row\">        \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                          <a routerLink=\"/Portal/Opportunities\"><img src=\"assets/img/volunteer_opportunities.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">Volunteer Oportunities</span>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\r\n                        <a routerLink=\"/Portal/History\"><img src=\"assets/img/volunteerhistory.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">Voluteer History</span>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                        <a routerLink=\"/Portal/Hours\"><img src=\"assets/img/volunteerHours.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <span class=\"psln-text\">Volunteer Hours</span>\r\n                      </div>   \r\n                  </div>                     \r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n  <div class=\"container\">\r\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n        <a class=\"display-4 psln-btnContact\">Join the Team        </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerPortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VolunteerPortalComponent = (function () {
    function VolunteerPortalComponent() {
    }
    VolunteerPortalComponent.prototype.ngOnInit = function () {
    };
    return VolunteerPortalComponent;
}());
VolunteerPortalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-volunteer-portal',
        template: __webpack_require__("../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VolunteerPortalComponent);

//# sourceMappingURL=volunteer-portal.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-register {\r\n\tbackground-color: #1CB94E;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #1CB94A;\r\n}\r\n.btn-register:hover,\r\n.btn-register:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #1CA347;\r\n\tborder-color: #1CA347;\r\n}\r\n.panel-login {\r\n\tborder-color: #ccc;\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n.panel-login>.panel-heading {\r\n\tcolor: #00415d;\r\n\tbackground-color: #fff;\r\n\tborder-color: #fff;\r\n\ttext-align:center;\r\n}\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login>.panel-heading a.active{\r\n\tcolor: #029f5b;\r\n\tfont-size: 18px;\r\n}\r\n.panel-login>.panel-heading hr{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tclear: both;\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n}\r\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\r\n\theight: 45px;\r\n\tborder: 1px solid #ddd;\r\n\tfont-size: 16px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n\toutline:none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n.btn-login {\r\n\tbackground-color: #59B2E0;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #59B2E6;\r\n}\r\n.btn-login:hover,\r\n.btn-login:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #53A3CD;\r\n\tborder-color: #53A3CD;\r\n}\r\n.forgot-password {\r\n\ttext-decoration: underline;\r\n\tcolor: #888;\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:focus {\r\n\ttext-decoration: underline;\r\n\tcolor: #666;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <div class=\"panel panel-login\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <a id=\"register-form-link\">Register</a>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <form id=\"register-form\"  >\r\n              <div class=\"form-group\">\r\n              <!-->  <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"user.name\" tabindex=\"1\" class=\"form-control\" placeholder=\"Your name\" value=\"\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" [(ngModel)]=\"user.noHashedpassword\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6 col-sm-offset-3\">\r\n                    <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" (click)=\"register(user)\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\r\n                  </div>\r\n                </div>-->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>    \r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket/get-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetImageService = (function () {
    function GetImageService() {
        this.s3BasePath = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].s3bucketURL;
    }
    GetImageService.prototype.getImage = function (fileName) {
        return (this.s3BasePath + '/' + fileName);
    };
    return GetImageService;
}());
GetImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GetImageService);

//# sourceMappingURL=get-image.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket/socket-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketManagerService = SocketManagerService_1 = (function () {
    function SocketManagerService(router) {
        this.router = router;
        this.socket = null;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    SocketManagerService.prototype.login = function (username, password, sessionId) {
        var _this = this;
        var context = this;
        console.log('username', username, 'password', password);
        return new Promise(function (resolve, reject) {
            var init = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.serverUrl);
            if (init == null)
                reject();
            else {
                var s = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](_this.serverUrl);
                s.on('disconnect', function (reply) {
                    sessionStorage.fppToken = null;
                    SocketManagerService_1.isLoggedIn = false;
                    context.router.navigate(['/']);
                });
                s.on('connect', function () {
                    /**
                     * Initial ping, were connected but not in, this is our opportunity to send
                     * credentials.  EITHER username and password OR sessionId
                     */
                    s.emit('authentication', [username, password, sessionId]);
                    s.on('authenticated', function (reply) {
                        // use the socket as usual 
                        // note that socket.id is same on the server
                        // so that's essentially the cookie
                        console.log('success auth and reply: ', reply);
                        SocketManagerService_1.isLoggedIn = true;
                        SocketManagerService_1.socket = s;
                        /**
                         * successfully logged in, save our socket id in sessionStorage
                         */
                        sessionStorage.fppToken = s.id;
                        resolve({ success: true });
                    });
                    s.on('unauthorized', function (reply) {
                        // use the socket as usual 
                        // note that socket.id is same on the server
                        // so that's essentially the cookie
                        console.log('ERROR: sorry wrong creds man: ', reply);
                        // clear sessionStorage
                        sessionStorage.fppToken = null;
                        SocketManagerService_1.socket = null;
                        SocketManagerService_1.isLoggedIn = false;
                        context.router.navigate(['/']);
                        reject({ success: false, server: reply });
                    });
                });
            }
        });
    };
    SocketManagerService.prototype.logout = function () {
        sessionStorage.fppToken = null;
        SocketManagerService_1.isLoggedIn = false;
    };
    SocketManagerService.prototype.isLoginValid = function () {
        if (SocketManagerService_1.isLoggedIn) {
            return true;
        }
        else {
            return false;
        }
    };
    SocketManagerService.prototype.emit = function (handlerName, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (SocketManagerService_1.isLoggedIn) {
                SocketManagerService_1.socket.emit(handlerName, data, function (error, response) {
                    if (error) {
                        console.log('got error from server', error);
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            if (sessionStorage.fppToken && !SocketManagerService_1.isLoggedIn) {
                _this.login(null, null, sessionStorage.fppToken).then(function (status) {
                    SocketManagerService_1.socket.emit(handlerName, data, function (error, response) {
                        if (error) {
                            console.log('got error from server', error);
                            reject(error);
                        }
                        else {
                            resolve(response);
                        }
                    });
                }, function (error) {
                    delete sessionStorage.fppToken;
                    SocketManagerService_1.isLoggedIn = false;
                    _this.router.navigate(['/']);
                });
            }
            if (!sessionStorage.fppToken && !SocketManagerService_1.isLoggedIn) {
                _this.router.navigate(['/']);
            }
        });
    };
    return SocketManagerService;
}());
SocketManagerService.isLoggedIn = false;
SocketManagerService.socket = null;
SocketManagerService = SocketManagerService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SocketManagerService);

var SocketManagerService_1, _a;
//# sourceMappingURL=socket-manager.service.js.map

/***/ }),

/***/ "../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #c2cdcd;\r\n    color: #fff; \r\n    width: 200px;\r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 60%\r\n}\r\n.lead{\r\n    color: #583A98;\r\n}\r\n.psln-text{\r\n    color:#fff;\r\n    font-size: 1.2em;\r\n}\r\n.psln-option{\r\n    height: 44px;\r\n    border-radius: 21px;\r\n    border: none;\r\n}\r\n.psln-navSearch{\r\n    background-color: #583A98;\r\n    margin-top: 1%;\r\n    height: 66px;\r\n    padding-top: 1%;\r\n    border-radius: 8px;\r\n    width: 100%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Regional Breed Tracker </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/tools\">Tools </span>/ <span  class=\"redirect\"> Regional Breed Tracker  </span>\r\n  </nav>\r\n   \r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n \r\n       <h2>About</h2>\r\n      <p>\r\n          Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n          Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\r\n      <p>\r\n          <div class=\"container psln-navSearch\"> \r\n              <div class=\"form-group\">  \r\n                  <label class=\"col-md-3 control-label psln-text\"  for=\"selectbasic\">Select Breed</label>\r\n                  <div class=\"col-md-4\">\r\n                          <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\r\n                          <option value=\"1\">Option one</option>\r\n                          <option value=\"2\">Option two</option>\r\n                          </select>\r\n                  </div>\r\n                  <div class=\"col-md-5\">\r\n                          <a class=\"btn btn-lg   btn-default psln-waitlist\" routerLink=\"/trackerResult\">Search</a>\r\n                  </div>\r\n                      \r\n              </div> \r\n            </div>        \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionalBreedTrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionalBreedTrackerComponent = (function () {
    function RegionalBreedTrackerComponent() {
    }
    RegionalBreedTrackerComponent.prototype.ngOnInit = function () {
    };
    return RegionalBreedTrackerComponent;
}());
RegionalBreedTrackerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-regional-breed-tracker',
        template: __webpack_require__("../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegionalBreedTrackerComponent);

//# sourceMappingURL=regional-breed-tracker.component.js.map

/***/ }),

/***/ "../../../../../src/app/tools/rescue-network/rescue-network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    color: #fff; \r\n    padding-left: 15%;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat;\r\n    background-color: #009CA7;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 140px;   \r\n    background-position-x: 10px;\r\n    margin-bottom:5%;\r\n    margin-top: 5%;\r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\r\n    background-color: #fff;\r\n    background-size: 25px;\r\n    background-position: right;    \r\n    background-position-x: 260px;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%\r\n}\r\n.lead{\r\n    color: #583A98;\r\n}\r\n.psln-option{\r\n    height: 44px;\r\n    border-radius: 21px;\r\n    border: none;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/rescue-network/rescue-network.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Rescue Network </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/tools\"> Tools </span> / <span class=\"redirect\"> Rescue Network </span>\r\n  </nav>\r\n  \r\n<div class=\"container\">\r\n    <br>\r\n   \r\n    <div class=\"col-md-3\">\r\n            <p class=\"lead\">Minnesota Rescues</p>         \r\n    </div>      \r\n    <div class=\"col-md-3\">\r\n            <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control psln-option\">\r\n            <option value=\"1\">Option one</option>\r\n            <option value=\"2\">Option two</option>\r\n            </select>\r\n    </div>  \r\n    <div class=\"col-md-3\">\r\n            <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" placeholder=\"Search by Pet´s Name, ID,Microchip ID...\"> \r\n    </div>  \r\n</div> \r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n\r\n    \t<div class=\"row\">                        \r\n              <div class=\"col-md-12\"> \r\n              <div class=\"table-responsive\">\r\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \r\n                     <thead>\r\n                      <th> </th>\r\n                      <th>Name</th>\r\n                      <th>Species</th>\r\n                      <th>Breed</th>\r\n                      <th>Date</th>\r\n                      <th>Manage</th> \r\n                     </thead>\r\n      <tbody>          \r\n      <tr>\r\n          <td>1</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a> </td>\r\n      </tr>\r\n          \r\n       <tr>\r\n          <td>2</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>3</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\r\n          </tr>\r\n          \r\n          \r\n          \r\n       <tr>\r\n          <td>4</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\r\n          </tr>\r\n          \r\n          \r\n       <tr>\r\n          <td>5</td>\r\n          <td>Mohsin</td>\r\n          <td>Irshad</td>\r\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\r\n          <td>isometric.mohsin@gmail.com</td>\r\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a> </td>\r\n          </tr>\r\n          \r\n         \r\n          \r\n         \r\n          \r\n      </tbody>\r\n              \r\n      </table>\r\n                      \r\n                  </div>\r\n                  \r\n              </div>\r\n        </div>\r\n       \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tools/rescue-network/rescue-network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RescueNetworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RescueNetworkComponent = (function () {
    function RescueNetworkComponent() {
    }
    RescueNetworkComponent.prototype.ngOnInit = function () {
    };
    return RescueNetworkComponent;
}());
RescueNetworkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rescue-network',
        template: __webpack_require__("../../../../../src/app/tools/rescue-network/rescue-network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tools/rescue-network/rescue-network.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RescueNetworkComponent);

//# sourceMappingURL=rescue-network.component.js.map

/***/ }),

/***/ "../../../../../src/app/tools/tools/tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.psln-containerBottom{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 175px;\r\n    padding-bottom: 170px;\r\n    margin-bottom: 0%;\r\n    margin-top:12%;\r\n}\r\n.psln-gallery_product\r\n{\r\n    margin-bottom: 30px;\r\n    padding-right: 1%;\r\n}\r\n.psln-text{\r\n    font-size: 20px;\r\n    color: #8f908e; \r\n    font-family: latoCustom; \r\n    text-align: -webkit-center;\r\n    display: -webkit-box;\r\n    margin-right: 26%;\r\n}\r\n#psln-panel{\r\n    width: 75%;\r\n    float: right;\r\n}\r\n#psln-panelBody{\r\n    border-radius: 15px;\r\n    z-index: 99999;\r\n    position: relative;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-textBot{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 3em;\r\n}\r\n\r\n.psln-btnContact{ \r\n    position: relative; \r\n    margin-left: 40%;\r\n    top: 90px;\r\n    font-size: 1.8em;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 12px 33px;\r\n    width: 205px; \r\n    text-decoration: none;\r\n    line-height: 1.42857143;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 3px solid;\r\n}\r\n.imgCustom{\r\n    max-width: 66%;\r\n}\r\n@media (max-width:992px) { \r\n    #psln-panel  {\r\n        width: 100%;\r\n        float: right;\r\n    }\r\n    .imgCustom{\r\n        max-width: 90%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width:1200px) {   \r\n    .psln-text{ \r\n        margin-right: 9%;\r\n    }\r\n  }\r\n  @media (max-width:725px) {   \r\n    .psln-text{ \r\n        margin-right: 1%;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\r\n<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Tools</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\"> \r\n          <app-sidebar></app-sidebar>        \r\n      <div class=\"col-md-6\" id=\"psln-panel\">\r\n          <div class=\"panel\" id=\"psln-panelBody\">\r\n              <div class=\"panel-body\"> \r\n                  <div class=\"row\">        \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                          <a routerLink=\"/rescueNetwork\"><img src=\"assets/img/recueNetwork.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">Rescue Network</p>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\r\n                        <a routerLink=\"/RegionalBreed\"><img src=\"assets/img/regionalBreedTracker.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">Regional Breed Tracker</p>\r\n                      </div>            \r\n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\r\n                        <a routerLink=\"/transport\"><img src=\"assets/img/transport.svg\" class=\"img-responsive imgCustom\"></a>\r\n                          <p class=\"psln-text\">transport</p>\r\n                      </div>   \r\n                  </div>                     \r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"jumbotron psln-containerBottom\">\r\n  <div class=\"container\">\r\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\r\n        <a class=\"display-4 psln-btnContact\">Contact Us</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    return ToolsComponent;
}());
ToolsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tools',
        template: __webpack_require__("../../../../../src/app/tools/tools/tools.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tools/tools/tools.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ToolsComponent);

//# sourceMappingURL=tools.component.js.map

/***/ }),

/***/ "../../../../../src/app/tools/tracker-result/tracker-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0; \r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    color: #fff;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\r\n    background-color: #583A98;\r\n    background-size: 25px;\r\n    background-position: left;\r\n    background-position-x: 10px;\r\n    width: 103px;\r\n    padding-left: 13%;\r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n} \r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 90%\r\n}\r\n.lead{\r\n    color: #583A98;\r\n}\r\n.psln-option{\r\n    height: 44px;\r\n    border-radius: 21px;\r\n    border: none;\r\n}\r\n.psln-rightNav{\r\n    float: right;\r\n}\r\n.psln-twoCol{ \r\n    margin-top:8%;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 200px;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tracker-result/tracker-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4 psln-oracleText\">Regional Breed Tracker </h1>\r\n    </div>\r\n  </div>\r\n  <nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/tools\">Tools</span> / <span class=\"redirect\" routerLink=\"/RegionalBreed\">Regional Breed Tracker </span>/ <span class=\"redirect\" >Tracker Result</span>\r\n  </nav>\r\n  \r\n<div class=\"container\">\r\n    <br>  \r\n    <div class=\"col-md-3\">\r\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Back</a> \r\n    </div>  \r\n</div> \r\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \r\n    <div class=\"col-md-12\">\r\n        <div class=\"lead\" style=\"float:left;\">Dalmation</div> \r\n        <div class=\"psln-rightNav\">\r\n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">By Adoption Popularity</a> \r\n        </div>\r\n        <div class=\"row\">                        \r\n            <div class=\"col-md-12\"> \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \r\n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>               \r\n            </div>\r\n      </div>\r\n    </div>     \r\n           \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tools/tracker-result/tracker-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackerResultComponent = (function () {
    function TrackerResultComponent() {
    }
    TrackerResultComponent.prototype.ngOnInit = function () {
    };
    return TrackerResultComponent;
}());
TrackerResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tracker-result',
        template: __webpack_require__("../../../../../src/app/tools/tracker-result/tracker-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tools/tracker-result/tracker-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrackerResultComponent);

//# sourceMappingURL=tracker-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/tools/transport/transport.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 100%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.control-label{\r\n    color: #583A98;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.psln-threeCol{\r\n    -webkit-column-count: 3;\r\n            column-count: 3;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 30px;\r\n}\r\n.psln-btnSave{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n}\r\n.psln-btnCancel{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #a7a7b5;\r\n    color: #fff;\r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.psln-btnFoot{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.psln-userInfo{    \r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \r\n    background-color:#009CA7;\r\n    background-size: 25px;\r\n    background-position: left; \r\n    width: 220px;   \r\n    background-position-x: 10px;\r\n    margin-bottom:5%;\r\n    margin-top: 5%;\r\n    color:#fff;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">Transport</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n <span class=\"redirect\" routerLink=\"/tools\">Tools</span> / <span class=\"redirect\"> Transport</span>\r\n</nav>\r\n<div class=\"container\">\r\n<div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\r\n      <form class=\"form-horizontal\">\r\n              <fieldset> \r\n              <!-- Text input-->\r\n              <br>\r\n              <div class=\"col-md-12\">\r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"Brand\">Send Request to</label>  \r\n                <div class=\"col-md-8\">\r\n                <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Brand\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"much\">To Transport</label>  \r\n                <div class=\"col-md-8\">\r\n                <input id=\"much\" name=\"much\" type=\"text\" placeholder=\"How Much\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"often\">On this Date</label>  \r\n                <div class=\"col-md-8\">\r\n                <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Textarea -->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"Instructions\">From This Address</label>\r\n                <div class=\"col-md-8\">                     \r\n                  <textarea class=\"form-control\" id=\"Instructions\" name=\"Instructions\"> Description....</textarea>\r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Button (Double) -->\r\n              <div class=\"form-group\"> \r\n                <div class=\"col-md-12\" align=\"center\">\r\n                  <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">Submit Request</a> \r\n                </div>\r\n              </div>\r\n              </div>\r\n              </fieldset>\r\n              </form>\r\n              \r\n</div> \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tools/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransportComponent = (function () {
    function TransportComponent() {
    }
    TransportComponent.prototype.ngOnInit = function () {
    };
    return TransportComponent;
}());
TransportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transport',
        template: __webpack_require__("../../../../../src/app/tools/transport/transport.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tools/transport/transport.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TransportComponent);

//# sourceMappingURL=transport.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/file-upload/file-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textLoad{\r\n    position: absolute;\r\n    margin-top: -80px;\r\n    width: 100%;\r\n    left: 0;\r\n    font-weight: 100;\r\n}\r\n.none{\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\" >\r\n      <a href=\"javascript:void(0)\" (click)=\"file.click()\" > \r\n        <br>\r\n        <br>\r\n       <b ngClass=\"{{textImage}}\"  style=\"color:#000;\"> Select images to upload </b>\r\n      </a><br>\r\n      <span ngClass=\"{{display}}\" style=\"font-size: 16px;color: #000;\">Or Drag & Drop to images files</span>\r\n      <br>\r\n      <br>\r\n\r\n        <input type=\"file\" \r\n              #file \r\n              [multiple]=\"(maxFiles > 1)\"\r\n              (change) = \"onFileChange($event)\"\r\n              style=\"display:none\" />\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"row error\" *ngIf=\"errors.length > 0\">    \r\n  <ul>\r\n    <li *ngFor=\"let err of errors\">{{err}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/upload/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_upload_service_new_upload_service__ = __webpack_require__("../../../../../src/app/upload/new-upload/service/new-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_progress_http__ = __webpack_require__("../../../../angular-progress-http/angular-progress-http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileUploadComponent = (function () {
    function FileUploadComponent(newUploadService, http, httpProgress) {
        this.newUploadService = newUploadService;
        this.http = http;
        this.httpProgress = httpProgress;
        this.errors = [];
        this.dragAreaClass = 'dragarea';
        this.textImage = 'textImage';
        this.display = 'block';
        this.fileExt = "JPG, GIF, PNG";
        this.maxFiles = 5;
        this.maxSize = 5; // 5MB
        this.uploadStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FileUploadComponent.prototype.ngOnInit = function () { };
    FileUploadComponent.prototype.onFileChange = function (event) {
        var files = event.target.files;
        this.globalFiles = files;
        this.uploadStatus.emit(files);
        this.textImage = 'textLoad';
        this.display = 'none';
    };
    FileUploadComponent.prototype.onDragOver = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragEnter = function (event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragEnd = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDragLeave = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    };
    FileUploadComponent.prototype.onDrop = function (event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        var files = event.dataTransfer.files;
        this.globalFiles = files;
        this.uploadStatus.emit(files);
        this.textImage = 'textLoad';
        this.display = 'none';
    };
    FileUploadComponent.prototype.saveFiles = function (files) {
        var _this = this;
        this.errors = []; // Clear error
        // Validate file size and allowed extensions
        if (files.length > 0 && (!this.isValidFiles(files))) {
            // this.uploadStatus.emit(false);
            return;
        }
        /*
         if (files.length > 0) {
               let formData: FormData = new FormData();
               for (var j = 0; j < files.length; j++) {
                   formData.append("file[]", files[j], files[j].name);
               }
               var parameters = {
                   projectId: this.projectId,
                   sectionId: this.sectionId
               }
               console.log("Carga Completa");
              // this.uploadStatus.emit(true);
           }
       */
        return this.newUploadService.getCredentials(files).map(function (credentials) {
            var uploads = [];
            for (var x = 0; x <= credentials.length - 1; x++) {
                var credential = credentials[x];
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
                headers.append('Content-Type', credential.contentType);
                var request = _this.httpProgress
                    .withUploadProgressListener(function (progress) { _this.newUploadService.updateUploadProgress(progress); })
                    .put(credential.url, credential.file, { headers: headers });
                // const request = this.http.put(credential.url, credential.file, {headers});
                // request.subscribe()
                uploads.push(request);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(uploads);
        });
    };
    FileUploadComponent.prototype.isValidFiles = function (files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
            return;
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    };
    FileUploadComponent.prototype.isValidFileExtension = function (files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push("Error (Extension): " + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    };
    FileUploadComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    };
    return FileUploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "projectId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "sectionId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "fileExt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "maxFiles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FileUploadComponent.prototype, "maxSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "uploadStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragOver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragEnd", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDragLeave", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUploadComponent.prototype, "onDrop", null);
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__new_upload_service_new_upload_service__["a" /* NewUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__new_upload_service_new_upload_service__["a" /* NewUploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_progress_http__["a" /* ProgressHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_progress_http__["a" /* ProgressHttp */]) === "function" && _c || Object])
], FileUploadComponent);

var _a, _b, _c;
//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/new-upload/service/new-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewUploadService = (function () {
    function NewUploadService(socketManager, http) {
        this.socketManager = socketManager;
        this.http = http;
        this.re = /(?:\.([^.]+))?$/;
        this.uploadProgress = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.uniqueID = function () {
            function chr4() {
                return Math.random().toString(16).slice(-4);
            }
            return chr4() + chr4() +
                '-' + chr4() +
                '-' + chr4() +
                '-' + chr4() +
                '-' + chr4() + chr4() + chr4();
        };
        this.getUniqueName = function (name) {
            return this.uniqueID() + '.' + this.re.exec(name)[1];
        };
        this.requestCredentials = function (fileName) {
            // const observable = new Observable<any>(observer => {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/image/' + fileName);
        };
        this.getCredentials = function (files) {
            var credentialsObservables = [];
            if (files && files.length) {
                var _loop_1 = function (x) {
                    var uName = this_1.getUniqueName(files[x].name);
                    credentialsObservables.push(this_1.requestCredentials(uName).map(function (res) {
                        res = res.json();
                        res.file = files[x];
                        res.uName = uName;
                        return res;
                    }).catch(function (err) {
                        console.log(err);
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(err);
                    }));
                };
                var this_1 = this;
                for (var x = 0; x <= files.length - 1; x++) {
                    _loop_1(x);
                }
                /*
                const uploads = [];
                Observable.forkJoin(credentialsObservables).subscribe(credentials => {
                  credentials.map((credential: any) => {
                    uploads.push(this.http.put(credential.url, credential.file, { headers: { 'Content-Type': credential.contentType } }));
                  });
                });
                */
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(credentialsObservables);
            }
        };
    }
    NewUploadService.prototype.updateUploadProgress = function (progress) {
        this.uploadProgress.next(progress);
    };
    NewUploadService.prototype.getUploadPogress = function () {
        return this.uploadProgress;
    };
    return NewUploadService;
}());
NewUploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _b || Object])
], NewUploadService);

var _a, _b;
//# sourceMappingURL=new-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/newuser/newuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 100%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.control-label{\r\n    color: #583A98;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.psln-threeCol{\r\n    -webkit-column-count: 3;\r\n            column-count: 3;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 30px;\r\n}\r\n.psln-btnSave{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n}\r\n.psln-btnCancel{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #a7a7b5;\r\n    color: #fff;\r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.psln-btnFoot{\r\n    border-radius: 25px;\r\n    width: 150px;\r\n    margin-left: 5%;\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n/* Upload Image */\r\n\r\n.dragarea{\r\n    height: 280px;\r\n    border: 1px solid;\r\n    padding: 16%;\r\n    margin-top: 2%;\r\n    margin-left: 24%;\r\n    background-image:url('http://34.215.129.201:3000/assets/img/userimage.jpg');\r\n    width: 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.textLoad{\r\n    position: absolute; \r\n    width: 100%;\r\n    left: 0;\r\n}\r\n.none{\r\n    display: none;\r\n}\r\n.leftDiv{\r\n    margin-left: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">New User</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> /<span class=\"redirect\" routerLink=\"/user\" > Manage Users </span> /<span class=\"redirect\" > New User</span>\r\n</nav>\r\n<div class=\"container\">\r\n\r\n<div class=\"col-md-12 bs-calltoaction bs-calltoaction-default\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"dragarea\" id=\"preImage\">\r\n            <app-file-upload\r\n            projectId=\"100\" \r\n            sectionId=\"101\" \r\n            maxFiles=\"1\"\r\n            maxSize=\"2\"\r\n            fileExt=\"JPG, GIF, PNG\"\r\n            (uploadStatus)=\"refreshImages($event)\"\r\n            (change)=\"readUrl($event)\" >\r\n          </app-file-upload>\r\n        </div>\r\n        </div>\r\n      <form class=\"leftDiv form-horizontal col-md-8\">\r\n\r\n              <fieldset> \r\n                \r\n              <!-- Text input--> \r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-2 control-label\" for=\"name\">Username*</label>  \r\n                  <div class=\"col-md-10\">\r\n                  <input id=\"username\" name=\"username\" type=\"text\" [(ngModel)]=\"user.username\" placeholder=\"User Name\" class=\"form-control input-md\"  >\r\n                    \r\n                  </div>\r\n              </div>\r\n                <!-- Text input--> \r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-2 control-label\" for=\"name\">Password*</label>  \r\n                  <div class=\"col-md-10\">\r\n                  <input id=\"pass\" name=\"pass\" type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control input-md\">\r\n                    \r\n                  </div>\r\n              </div>\r\n              <!-- Text input--> \r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"name\">Firstname*</label>  \r\n                <div class=\"col-md-10\">\r\n                <input id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"user.firstname\" placeholder=\"First Name\" class=\"form-control input-md\">\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"middle\"> Middle Name</label>  \r\n                <div class=\"col-md-10\">\r\n                <input id=\"middle\" name=\"middle\" type=\"text\" [(ngModel)]=\"user.middlename\" placeholder=\"Middle Name\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n\r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"last\">Lastname*</label>  \r\n                <div class=\"col-md-10\">\r\n                <input id=\"last\" name=\"last\" type=\"text\"  [(ngModel)]=\"user.lastname\" placeholder=\"Last Name\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Select input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"birth\">Birth Date*</label>\r\n                <div class=\"col-md-10\"> \r\n                  <input id=\"birth\" name=\"birth\" type=\"date\" [(ngModel)]=\"user.birthdate\" placeholder=\"Birth Date\" class=\"form-control input-md\">\r\n\r\n                </div>\r\n              </div>\r\n              <!-- Select input-->\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-2 control-label\" for=\"email\">Email*</label>\r\n                  <div class=\"col-md-10\">\r\n                      <input id=\"email\" name=\"email\" type=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control input-md\">    \r\n                  </div>\r\n              </div>                 \r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"phone\">Phone*</label>  \r\n                <div class=\"col-md-10\">\r\n                <input id=\"phone\" name=\"phone\" type=\"number\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" class=\"form-control input-md\">\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n              \r\n              <!-- Text input-->\r\n              <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\" for=\"type\">Type*</label>  \r\n                <div class=\"col-md-10\">\r\n                    <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"user.type\">\r\n                        <option  value=\"volunteer\">volunteer</option>\r\n                        <option  value=\"employees\">employee</option>\r\n                        <option  value=\"user\">user</option>\r\n                    </select>\r\n                <span class=\"help-block\"> </span>  \r\n                </div>\r\n              </div>\r\n        \r\n              </fieldset>\r\n              </form>\r\n              \r\n              <!-- Button (Double) -->\r\n              <div class=\"form-group\"> \r\n                  <div class=\"col-md-12\" align=\"center\">\r\n                    <a id=\"button1id\" name=\"button1id\" (click)=\"createPJ(user)\" class=\"btn btn-lg  btn-default psln-btnSave\">Save</a>\r\n                    <a id=\"button2id\" name=\"button2id\" routerLink=\"/user\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\r\n                  </div>\r\n                </div> \r\n              \r\n</div> \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/newuser/newuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_newuser_service__ = __webpack_require__("../../../../../src/app/user/newuser/shared/newuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewuserComponent = (function () {
    function NewuserComponent(newuserService, fileUploadComponent, toastr, router, vcr) {
        this.newuserService = newuserService;
        this.fileUploadComponent = fileUploadComponent;
        this.toastr = toastr;
        this.router = router;
        this.user = {};
        this.imgUp = {};
        this.url = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
        this.toastr.setRootViewContainerRef(vcr);
    }
    NewuserComponent.prototype.ngOnInit = function () {
        this.imgUp.name = "";
        this.user.username = "";
        this.user.password = "";
        this.user.firstname = "";
        this.user.lastname = "";
        this.user.birthdate = "";
        this.user.email = "";
        this.user.phone = "";
        this.user.type = "";
    };
    NewuserComponent.prototype.validateData = function (user) {
        if (this.imgUp.name == "") {
            this.toastr.error('Required Image!', 'Oops!', { showCloseButton: true });
            return false;
        }
        if (this.user.username == "") {
            this.toastr.error('Required Username!', 'Oops!', { showCloseButton: true });
            document.getElementById("username").focus();
            return false;
        }
        if (this.user.firstname == "") {
            this.toastr.error('Required Firstname!', 'Oops!', { showCloseButton: true });
            document.getElementById("name").focus();
            return false;
        }
        if (this.user.lastname == "") {
            this.toastr.error('Required Lastname!', 'Oops!', { showCloseButton: true });
            document.getElementById("last").focus();
            return false;
        }
        if (this.user.birthdate == "") {
            this.toastr.error('Required Birth Date!', 'Oops!', { showCloseButton: true });
            document.getElementById("birth").focus();
            return false;
        }
        if (this.user.email == "") {
            this.toastr.error('Required Email!', 'Oops!', { showCloseButton: true });
            document.getElementById("email").focus();
            return false;
        }
        if (this.user.phone == "") {
            this.toastr.error('Required Phone!', 'Oops!', { showCloseButton: true });
            document.getElementById("phone").focus();
            return false;
        }
        if (this.user.type == "") {
            this.toastr.error('Required Type!', 'Oops!', { showCloseButton: true });
            document.getElementById("type").focus();
            return false;
        }
        return true;
    };
    NewuserComponent.prototype.createPJ = function (user) {
        var _this = this;
        if (this.validateData(this.user)) {
            this.toastr.info('Upload', 'Loading');
            if (user.type == "volunteer") {
                this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                    result.subscribe(function (res) {
                        var url = res[0].url;
                        user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                        console.dir(user);
                        _this.newuserService.createVolunteer(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!', { showCloseButton: true });
                            }
                            else {
                                _this.toastr.success('Volunteer Created!', 'Success!', { showCloseButton: true });
                                _this.router.navigate(['/user/']);
                            }
                        });
                    });
                });
            }
            else if (user.type == "employees") {
                this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                    result.subscribe(function (res) {
                        var url = res[0].url;
                        user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                        console.dir(user);
                        _this.newuserService.createEmployee(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!', { showCloseButton: true });
                            }
                            else {
                                _this.toastr.success('Employee Created!', 'Success!', { showCloseButton: true });
                                _this.router.navigate(['/user/']);
                            }
                        });
                    });
                });
            }
            else if (user.type == "user") {
                this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                    result.subscribe(function (res) {
                        var url = res[0].url;
                        user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                        console.dir(user);
                        _this.newuserService.createUser(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!', { showCloseButton: true });
                            }
                            else {
                                _this.toastr.success('User Created!', 'Success!', { showCloseButton: true });
                                _this.router.navigate(['/user/']);
                            }
                        });
                    });
                });
            }
        }
    };
    NewuserComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
                document.getElementById("preImage").style.backgroundImage = 'url(' + _this.url + ')';
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    NewuserComponent.prototype.refreshImages = function (status) {
        this.imgUp = status;
    };
    return NewuserComponent;
}());
NewuserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newuser',
        template: __webpack_require__("../../../../../src/app/user/newuser/newuser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/newuser/newuser.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_newuser_service__["a" /* NewuserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_newuser_service__["a" /* NewuserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], NewuserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=newuser.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/newuser/shared/newuser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewuserService = (function () {
    function NewuserService(socketManager) {
        this.socketManager = socketManager;
    }
    NewuserService.prototype.createEmployee = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('create employee', user).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    NewuserService.prototype.createVolunteer = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('create volunteer', user).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    NewuserService.prototype.createUser = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('create user', user).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return NewuserService;
}());
NewuserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], NewuserService);

var _a;
//# sourceMappingURL=newuser.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user/shared/user-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {User} book The user to compare to the filter.
     * @param {User} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    UserFilterPipe.prototype.applyFilter = function (user, filter) {
        var userP = user['AppUser'];
        for (var key in filter) {
            console.log('firstname ->', userP['username'].toLowerCase().indexOf(filter));
            console.log('Lastname ->', userP['lastname'].toLowerCase().indexOf(filter));
            console.log('id ->', userP['id'].toLowerCase().indexOf(filter));
            if (userP['firstname'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1 && userP['lastname'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1 && userP['id'].toLowerCase().indexOf(filter.toString().toLowerCase()) === -1) {
                console.log(filter + " -> " + "No Encontre");
                return false;
            }
            else {
                console.log(key + " -> " + " Encontre");
            }
        }
        return true;
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'userfilter',
        pure: false
    })
], UserFilterPipe);

//# sourceMappingURL=user-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/user/user/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(socketManager) {
        this.socketManager = socketManager;
        this.socket = __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */].socket;
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get all users', {}).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    UserService.prototype.getType = function (usertype) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('get all users by user type', { usertype: usertype }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        console.log(id);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('delete user', { id: id }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n\r\n}\r\n\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-active{\r\n    background-color: rgba(196, 245, 255, 0.47)  !important;\r\n    color: #583A98 !important; \r\n    cursor: pointer;\r\n}\r\n.psln-navUsersText:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2:hover{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n    cursor: pointer;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n}\r\n.psln-waitlist{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff; \r\n}\r\n.psln-notes{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff; \r\n}\r\n.psln-delete{\r\n    border-radius: 30px;\r\n    background-color: #DC4468;\r\n    color: #fff; \r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #583A98;\r\n    color: #fff;  \r\n    margin-left: 10%;     \r\n    width: 200px;\r\n    margin-top: -10px;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%; \r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\r\n    background-color: #fff;\r\n    background-size: 25px;\r\n    background-position: right;\r\n    background-position-x: 260px;\r\n}\r\n.sub-text{\r\n    color: #583A98;\r\n    text-decoration: none;\r\n    padding-right: 4%;\r\n    font-size: 17px;\r\n} \r\n.img-circle{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4 psln-oracleText\">Manage Users</h1>\r\n    </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n    <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> /<span class=\"redirect\" routerLink=\"/user\" > Manage Users </span>\r\n</nav>\r\n<div class=\"container\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"container\">\r\n            <br>\r\n           <!-- <p class=\"lead\">Users Types</p>-->\r\n            <div class=\"addPet\">\r\n                <form>\r\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" [(ngModel)]=\"filter\" placeholder=\"Search by   Name, ID...\">\r\n                </form>\r\n                <a routerLink=\"/newuser\" class=\"btn btn-lg btn-block btn-default psln-btnNewPet\">Add New\r\n                    <img class=\"psln-imgAsset\" src=\"assets/img/ADD.svg\" width=\"35\">\r\n                </a>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                   <!-- <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\r\n                        <li>\r\n                            <a id=\"admins\" (click)=\"getType('Admins')\" class=\"psln-navUsersText2 psln-active\">Admins</a>\r\n                        </li>\r\n                        <li>\r\n                            <a id=\"manager\" (click)=\"getType('Managers')\" class=\"psln-navUsersText2\">Managers</a>\r\n                        </li>\r\n                    </ul>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8\" style=\"margin-top:11%;\">\r\n        <div class=\"bs-calltoaction bs-calltoaction-default\" *ngFor=\"let user of listUser |userfilter:filter\">\r\n            <div class=\"row\">\r\n                <div class=\"profile-header-container\" style=\"padding-top: 15%;\">\r\n                    <div class=\"profile-header-img\">\r\n                        <img class=\"img-circle\" [src]=\"getImage(user.AppUser.profileImage)\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-9 cta-contents\">\r\n                    <div class=\"cta-desc\">\r\n                        <p>\r\n                            <a class=\"sub-text\">Name:</a>{{user.AppUser.firstname}} {{user.AppUser.lastname}}</p>\r\n                        <p>\r\n                            <a class=\"sub-text\">ID:</a>{{user.AppUser.id}}</p>\r\n                        <p>\r\n                            <a class=\"sub-text\">Status:</a>{{user.AppUser.active}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 cta-button\">\r\n                    <a (click)=\"viewDetail(user.AppUser)\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Edit</a>\r\n                    <a (click)=\"deleteUser(user.AppUser)\"  class=\"btn btn-lg btn-block btn-default psln-notes\">Delete</a>\r\n                    <!--<a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Misk</a>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_shared_user_service__ = __webpack_require__("../../../../../src/app/user/user/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__ = __webpack_require__("../../../../../src/app/shared/socket/get-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(UserServices, router, getImageService, toastr, vcr) {
        this.UserServices = UserServices;
        this.router = router;
        this.getImageService = getImageService;
        this.toastr = toastr;
        this.employee = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserServices.getUsers().subscribe(function (res) {
            _this.listAll = res;
            _this.listUser = _this.listAll.filter(function (appuser) { return appuser.AppUser != null; });
            console.dir(res);
        });
    };
    UserComponent.prototype.getType = function (usertype) {
        if (usertype == 'Admins') {
            document.getElementById('admins').classList.add('psln-active');
            document.getElementById('manager').classList.remove('psln-active');
        }
        if (usertype == 'Managers') {
            document.getElementById('admins').classList.remove('psln-active');
            document.getElementById('manager').classList.add('psln-active');
        }
        console.log(usertype);
        /* this.UserServices.getType(usertype).subscribe(res =>{
          this.listUser = res;
          console.dir(res);
        });*/
    };
    UserComponent.prototype.getImage = function (fileName) {
        if (fileName) {
            return this.getImageService.getImage(fileName);
        }
        else {
            return '/assets/img/userimage.jpg';
        }
    };
    UserComponent.prototype.viewDetail = function (pet) {
        console.dir(pet);
        localStorage.setItem('user', JSON.stringify(pet));
        this.router.navigate(['/userdetail/']);
    };
    UserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var r = confirm("Delete User? " + user.firstname);
        if (r == true) {
            this.UserServices.deleteUser(user.id).subscribe(function (res) {
                console.dir(res);
                _this.toastr.success('User Delete!', 'Success!', { showCloseButton: true });
                _this.UserServices.getUsers().subscribe(function (res) {
                    _this.listAll = res;
                    _this.listUser = _this.listAll.filter(function (appuser) { return appuser.AppUser != null; });
                    console.dir(res);
                });
            });
        }
        else {
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user/user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_shared_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/userdetail/shared/userdetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__ = __webpack_require__("../../../../../src/app/shared/socket/socket-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserdetailService = (function () {
    function UserdetailService(socketManager) {
        this.socketManager = socketManager;
    }
    UserdetailService.prototype.updateEmployee = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('update employee', { id: user.id, data: user }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    UserdetailService.prototype.updateVolunteer = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('update volunteer', { id: user.id, data: user }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    UserdetailService.prototype.updateUser = function (user) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketManager.emit('update user', { id: user.id, data: user }).then(function (res) {
                observer.next(res);
            });
        });
        return observable;
    };
    return UserdetailService;
}());
UserdetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_socket_manager_service__["a" /* SocketManagerService */]) === "function" && _a || Object])
], UserdetailService);

var _a;
//# sourceMappingURL=userdetail.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/userdetail/userdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-calltoaction{\r\n    position: relative;\r\n    width:auto;\r\n    padding: 15px 25px;\r\n    border: 1px solid black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .bs-calltoaction > .row{\r\n        display:table;\r\n        width: calc(100% + 30px);\r\n    }\r\n     \r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:table-cell;\r\n            vertical-align:middle;\r\n        }\r\n\r\n            .cta-contents{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n                .cta-title{\r\n                    margin: 0 auto 15px;\r\n                    padding: 0;\r\n                }\r\n\r\n                .cta-desc{\r\n                    padding: 0;\r\n                    border-left: 1px solid #cbcaca;\r\n                    padding-left: 2%;\r\n                }\r\n\r\n                .cta-desc p:last-child{\r\n                    margin-bottom: 0;\r\n                }\r\n\r\n            .cta-button{\r\n                padding-top: 10px;\r\n                padding-bottom: 10px;\r\n            }\r\n\r\n@media (max-width: 991px){\r\n    .bs-calltoaction > .row{\r\n        display:block;\r\n        width: auto;\r\n    }\r\n\r\n        .bs-calltoaction > .row > [class^=\"col-\"],\r\n        .bs-calltoaction > .row > [class*=\" col-\"]{\r\n            float:none;\r\n            display:block;\r\n            vertical-align:middle;\r\n            position: relative;\r\n        }\r\n\r\n        .cta-contents{\r\n            text-align: center;\r\n        }\r\n}\r\n\r\n\r\n\r\n.bs-calltoaction.bs-calltoaction-default{\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #fcf8e3;\r\n    border-radius: 38px;\r\n    width: 100%;\r\n}\r\n\r\n.psln-container{\r\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \r\n    padding-top: 80px;\r\n    padding-bottom: 104px;\r\n}\r\n.control-label{\r\n    color: #583A98;\r\n}\r\n.psln-oracleText{\r\n    float: right;\r\n    margin-right: 36%;\r\n    color: white;\r\n    font-family: pacificoCustom;\r\n}\r\n.psln-navUsers{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 1%;    \r\n    padding-left: 7%;\r\n}\r\n.psln-navUsersText{\r\n    background-color: rgba(196, 245, 255, 0.47);\r\n    color: #583A98;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-navUsersText:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2:hover{\r\n    color: #fff; \r\n    background-color: transparent;\r\n}\r\n.psln-navUsersText2{\r\n    background-color: #583A98;\r\n    color: #fff;\r\n    height: 50px;\r\n    margin-top: -2.2%;\r\n    font-size: 1.1em;\r\n    padding: 5%;\r\n    border-radius:0px;\r\n}\r\n.psln-btnUser{\r\n    border-radius: 30px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n    margin-bottom:11%;\r\n}\r\n.psln-btnActions{\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n.addPet{\r\n    float: right;\r\n    display:  -webkit-box;\r\n    display:  -ms-flexbox;\r\n    display:  flex;\r\n    position: relative;\r\n    margin-right: 10%;\r\n}\r\n.psln-btnNewPet{\r\n    border-radius: 30px;\r\n    background-color: #662D91;\r\n    color: #fff;  \r\n    margin-left: 10%; \r\n}\r\n.psln-contentGeneral{\r\n    margin-top: 10%;\r\n}\r\n.psln-btnPlace{\r\n    border-radius: 25px;\r\n    border: 1px solid #fff; \r\n    height: 45px;\r\n    width: 300px;\r\n    padding-left: 4%;\r\n}\r\n.psln-threeCol{\r\n    -webkit-column-count: 3;\r\n            column-count: 3;\r\n}\r\n.psln-imgPet{\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 30px;\r\n}\r\n.psln-btnSave{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #009CA7;\r\n    color: #fff;\r\n}\r\n.psln-btnCancel{\r\n    border-radius: 25px;\r\n    width: 140px;\r\n    background-color: #a7a7b5;\r\n    color: #fff;\r\n}\r\n.psln-divFoot{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.psln-btnFoot{\r\n    border-radius: 25px;\r\n    width: 150px;\r\n    margin-left: 5%;\r\n    background-color: #662D91;\r\n    color: #fff;\r\n}\r\n/* Upload Image */\r\n \r\n.dragarea{\r\n    height: 280px;\r\n    border: 1px solid;\r\n    padding: 16%;\r\n    margin-top: 2%;\r\n    margin-left: 24%;\r\n    background-image:url('http://34.215.129.201:3000/assets/img/userimage.jpg');\r\n    width: 100%;\r\n}\r\n\r\n.leftDiv{\r\n    margin-left: 5%;\r\n}\r\n.redirect{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/userdetail/userdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 psln-oracleText\">New User</h1>\r\n  </div>\r\n</div>\r\n<nav class=\"psln-navUsers\">\r\n  <span class=\"redirect\" routerLink=\"/home\">Dashboard</span> /<span class=\"redirect\" routerLink=\"/user\" > Manage Users </span> /<span class=\"redirect\" > Edit User</span>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"  col-sm-12 bs-calltoaction bs-calltoaction-default\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"dragarea\" id=\"preImage\">\r\n        <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"1\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\r\n          (change)=\"readUrl($event)\">\r\n        </app-file-upload>\r\n      </div>\r\n    </div>\r\n    <form class=\"leftDiv form-horizontal col-md-8\">\r\n      <fieldset>\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"name\">Username*</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"username\" name=\"username\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.username\" placeholder=\"User Name\"\r\n              class=\"form-control input-md\">\r\n\r\n          </div>\r\n        </div>\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"name\">Password*</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"pass\" name=\"pass\" type=\"password\" [disabled]=\"is_edit\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control input-md\">\r\n\r\n          </div>\r\n        </div>\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"name\">Firstname</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"name\" name=\"name\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.firstname\" placeholder=\"First Name\" class=\"form-control input-md\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"last\">Lastname</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"last\" name=\"last\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.lastname\" placeholder=\"Last Name\" class=\"form-control input-md\">\r\n            <span class=\"help-block\"> </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"middle\"> Middle Name</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"middle\" name=\"middle\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.middlename\" placeholder=\"Middle Name\"\r\n              class=\"form-control input-md\">\r\n            <span class=\"help-block\"> </span>\r\n          </div>\r\n        </div>\r\n        <!-- Select input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"birth\">Birth Date</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"birth\" name=\"birth\" type=\"date\" [disabled]=\"is_edit\"  [value]=\"user.birthdate | date:'yyyy-MM-dd'\" (input)=\"user.birthdate=($event.target.value)\" class=\"form-control input-md\">\r\n          \r\n          </div>\r\n        </div>\r\n        <!-- Select input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"email\">Email</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"email\" name=\"email\" type=\"email\" [disabled]=\"is_edit\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control input-md\">\r\n          </div>\r\n        </div>\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"phone\">Phone</label>\r\n          <div class=\"col-md-10\">\r\n            <input id=\"phone\" name=\"phone\" type=\"number\" [disabled]=\"is_edit\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" class=\"form-control input-md\">\r\n            <span class=\"help-block\"> </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Text input-->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" for=\"type\">Type</label>\r\n          <div class=\"col-md-10\">\r\n            <select id=\"type\" name=\"type\" class=\"form-control\" [disabled]=\"is_edit\" [(ngModel)]=\"user.type\">\r\n              <option value=\"volunteer\">volunteer</option>\r\n              <option value=\"employees\">employee</option>\r\n              <option value=\"user\">user</option>\r\n            </select>\r\n            <span class=\"help-block\"> </span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Button (Double) -->\r\n\r\n      </fieldset>\r\n    </form>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-12\" align=\"center\">\r\n        <a id=\"button1id\" name=\"button1id\" (click)=\"updateUser(user)\" class=\"btn btn-lg  btn-default psln-btnSave\">{{btnEdit}}</a>\r\n        <a id=\"button2id\" name=\"button2id\" routerLink=\"/user\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/userdetail/userdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_userdetail_service__ = __webpack_require__("../../../../../src/app/user/userdetail/shared/userdetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_get_image_service__ = __webpack_require__("../../../../../src/app/shared/socket/get-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/upload/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserdetailComponent = (function () {
    function UserdetailComponent(userdetailService, fileUploadComponent, getImageService, toastr, vcr) {
        this.userdetailService = userdetailService;
        this.fileUploadComponent = fileUploadComponent;
        this.getImageService = getImageService;
        this.toastr = toastr;
        this.user = {};
        this.imgUp = {};
        this.url = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        this.imgUp.name = "";
        this.user.username = "";
        this.user.firstname = "";
        this.user.lastname = "";
        this.user.email = "";
        this.user.phone = "";
        this.user.type = "";
        this.user = JSON.parse(localStorage.getItem('user'));
        var date = this.user.birthdate;
        date = String(date).split('T');
        this.user.birthdate = date[0];
        this.user.password = "";
        if (this.user.profileImage) {
            this.url = this.getImage(this.user.profileImage);
        }
        else {
            this.url = '/assets/img/userimage.jpg';
        }
        document.getElementById("preImage").style.backgroundImage = 'url(' + this.url + ')';
        console.dir(this.user);
        this.uuid = this.user.id;
        this.is_edit = true;
        this.btnEdit = "Edit User";
        if (this.user.AppUserGroupId == 4) {
            this.user.type = 'volunteer';
        }
        if (this.user.AppUserGroupId == 3) {
            this.user.type = 'employees';
        }
        if (this.user.AppUserGroupId == 2) {
            this.user.type = 'user';
        }
    };
    UserdetailComponent.prototype.validateData = function (user) {
        if (this.user.username == "") {
            this.toastr.error('Required Username!', 'Oops!', { showCloseButton: true });
            document.getElementById("username").focus();
            return false;
        }
        if (this.user.firstname == "") {
            this.toastr.error('Required Firstname!', 'Oops!', { showCloseButton: true });
            document.getElementById("name").focus();
            return false;
        }
        if (this.user.lastname == "") {
            this.toastr.error('Required Lastname!', 'Oops!', { showCloseButton: true });
            document.getElementById("last").focus();
            return false;
        }
        if (this.user.birthdate == "") {
            this.toastr.error('Required Birth Date!', 'Oops!', { showCloseButton: true });
            document.getElementById("birth").focus();
            return false;
        }
        if (this.user.email == "") {
            this.toastr.error('Required Email!', 'Oops!', { showCloseButton: true });
            document.getElementById("email").focus();
            return false;
        }
        if (this.user.phone == "") {
            this.toastr.error('Required Phone!', 'Oops!', { showCloseButton: true });
            document.getElementById("phone").focus();
            return false;
        }
        if (this.user.type == "") {
            this.toastr.error('Required Type!', 'Oops!', { showCloseButton: true });
            document.getElementById("type").focus();
            return false;
        }
        return true;
    };
    UserdetailComponent.prototype.updateUser = function (user) {
        var _this = this;
        if (this.btnEdit == "Edit User") {
            this.btnEdit = "Save Changes";
            this.is_edit = false;
        }
        else {
            user.id = this.uuid;
            if (this.validateData(this.user)) {
                this.toastr.info('Upload', 'Loading');
                if (user.type == "volunteer") {
                    if (this.imgUp.name != "") {
                        this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                            result.subscribe(function (res) {
                                var url = res[0].url;
                                user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                                console.dir(user);
                                _this.userdetailService.updateVolunteer(user).subscribe(function (res) {
                                    console.dir(res);
                                    _this.msg = res;
                                    if (_this.msg.error) {
                                        _this.toastr.error(_this.msg.error, 'Oops!');
                                    }
                                    else {
                                        _this.toastr.success('Volunteer Edit!', 'Success!');
                                    }
                                });
                            });
                        });
                    }
                    else {
                        this.userdetailService.updateVolunteer(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!');
                            }
                            else {
                                _this.toastr.success('Volunteer Edit!', 'Success!');
                            }
                        });
                    }
                }
                else if (user.type == "employees") {
                    if (this.imgUp.name != "") {
                        this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                            result.subscribe(function (res) {
                                var url = res[0].url;
                                user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                                console.dir(user);
                                _this.userdetailService.updateEmployee(user).subscribe(function (res) {
                                    console.dir(res);
                                    _this.msg = res;
                                    if (_this.msg.error) {
                                        _this.toastr.error(_this.msg.error, 'Oops!');
                                    }
                                    else {
                                        _this.toastr.success('Employee Edit!', 'Success!');
                                    }
                                });
                            });
                        });
                    }
                    else {
                        this.userdetailService.updateEmployee(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!');
                            }
                            else {
                                _this.toastr.success('Employee Edit!', 'Success!');
                            }
                        });
                    }
                }
                else if (user.type == "user") {
                    if (this.imgUp.name != "") {
                        this.fileUploadComponent.saveFiles(this.imgUp).subscribe(function (result) {
                            result.subscribe(function (res) {
                                var url = res[0].url;
                                user.profileImage = url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
                                console.dir(user);
                                _this.userdetailService.updateUser(user).subscribe(function (res) {
                                    console.dir(res);
                                    _this.msg = res;
                                    if (_this.msg.error) {
                                        _this.toastr.error(_this.msg.error, 'Oops!');
                                    }
                                    else {
                                        _this.toastr.success('User Edit!', 'Success!');
                                    }
                                });
                            });
                        });
                    }
                    else {
                        this.userdetailService.updateUser(user).subscribe(function (res) {
                            console.dir(res);
                            _this.msg = res;
                            if (_this.msg.error) {
                                _this.toastr.error(_this.msg.error, 'Oops!');
                            }
                            else {
                                _this.toastr.success('User Edit!', 'Success!');
                            }
                        });
                    }
                }
            }
        }
    };
    UserdetailComponent.prototype.getImage = function (fileName) {
        if (fileName) {
            return this.getImageService.getImage(fileName);
        }
        else {
            return '/assets/img/userimage.jpg';
        }
    };
    UserdetailComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
                document.getElementById("preImage").style.backgroundImage = 'url(' + _this.url + ')';
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserdetailComponent.prototype.refreshImages = function (status) {
        this.imgUp = status;
    };
    return UserdetailComponent;
}());
UserdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userdetail',
        template: __webpack_require__("../../../../../src/app/user/userdetail/userdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/userdetail/userdetail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_socket_get_image_service__["a" /* GetImageService */], __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_userdetail_service__["a" /* UserdetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_userdetail_service__["a" /* UserdetailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__upload_file_upload_file_upload_component__["a" /* FileUploadComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_get_image_service__["a" /* GetImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_get_image_service__["a" /* GetImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], UserdetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=userdetail.component.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/Lato-Hairline.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Lato-Hairline.a2e8f8eef2ec2047a32e.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Pacifico.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pacifico.6b6170fe52fb23f505b4.ttf";

/***/ }),

/***/ "../../../../../src/assets/img/ADD.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ADD.6c2076b7ce8f93282630.svg";

/***/ }),

/***/ "../../../../../src/assets/img/BROWSE.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BROWSE.cc62beba9846757c2b05.svg";

/***/ }),

/***/ "../../../../../src/assets/img/back.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back.51f89afb7fe22a2902ff.svg";

/***/ }),

/***/ "../../../../../src/assets/img/post.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "post.00ea02c22aaffd154b1b.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://34.215.129.201:3003',
    s3bucketURL: 'https://familypetproyect.s3.us-west-2.amazonaws.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map