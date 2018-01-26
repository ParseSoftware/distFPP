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
exports.push([module.i, "@font-face {\n    font-family: 'pacificoCustom';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + "); /* IE9 Compat Modes */\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('embedded-opentype'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('woff2'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ") format('woff'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Pacifico.ttf") + ")  format('truetype'), /* Safari, Android, iOS */ \n  }\n  @font-face {\n    font-family: 'latoCustom';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + "); /* IE9 Compat Modes */\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('embedded-opentype'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('woff2'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ") format('woff'), \n         url(" + __webpack_require__("../../../../../src/assets/fonts/Lato-Hairline.ttf") + ")  format('truetype'), /* Safari, Android, iOS */ \n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <router-outlet></router-outlet>\n<app-footer></app-footer>"

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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n    margin-top:12%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px;\n    padding-right: 1%;  \n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    font-family: latoCustom; \n    text-align: -webkit-center;\n    display: -webkit-box;\n    margin-right: 26%;\n}\n#psln-panel{\n    width: 75%;\n    float: right;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 3em;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 1.8em;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n\n.imgCustom{\n    max-width: 66%;\n}\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n    .imgCustom{\n        max-width: 90%;\n    }\n  }\n  \n  @media (max-width:1200px) {   \n    .psln-text{ \n        margin-right: 9%;\n    }\n  }\n  @media (max-width:725px) {   \n    .psln-text{ \n        margin-right: 1%;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Contact</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\"> \n          <app-sidebar></app-sidebar>        \n      <div class=\"col-md-6\" id=\"psln-panel\">\n          <div class=\"panel\" id=\"psln-panelBody\">\n              <div class=\"panel-body\"> \n                  <div class=\"row\">        \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                          <a routerLink=\"/messages\"><img src=\"../assets/img/messajes.svg\" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">Messages</p>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\n                        <a routerLink=\"/emailTemplate\"><img src=\"../assets/img/emailTemplates.svg\" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">Email Templates</p>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                        <a routerLink=\"/volunteerOpportunities\"><img src=\"../assets/img/volunteerOportunities.svg \" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">Volunteer Opportunities</p>\n                      </div>   \n                  </div>                     \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n  <div class=\"container\">\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n        <a class=\"display-4 psln-btnContact\">Contact Us</a>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">E-mail Templates </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Contact / Messages\n  </nav>\n\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    \t<div class=\"row\">                        \n              <div class=\"col-md-12\"> \n              <div class=\"table-responsive\">\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \n                     <thead>\n                      <th> </th>\n                      <th>Name</th>\n                      <th>Species</th>\n                      <th>Breed</th>\n                      <th>Date</th>\n                      <th>Manage</th> \n                     </thead>\n      <tbody>          \n      <tr>\n          <td>1</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n          \n       <tr>\n          <td>2</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>3</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n          \n       <tr>\n          <td>4</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>5</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n         \n          \n         \n          \n      </tbody>\n              \n      </table>\n                      \n                  </div>\n                  \n              </div>\n        </div>\n       \n           \n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 150px;\n    color: #fff;\n    padding-left: 4%;    \n    background-color: #583A98;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 7em;\n    width: 8em;\n    position: relative;\n    margin: 1%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}\n.psln-Text{\n    color: #583A98;\n}\n.psln-labText{\n    color: #583a98;\n    font-size: 1.5em;\n    padding: 1%;\n}\n.psln-rightNav{\n    float: right;\n}\n\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-copy{\n    border-radius: 30px;\n    background-color: #928E8F;\n    color: #fff; \n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Dashboard / Forms\n  </nav>\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n        <div class=\"container psln-navSearch\"> \n            <div class=\"form-group\"> \n                <div class=\"col-md-12\">\n                    <p style=\"color:#fff;font-size:1.3em\">Form Title</p>\n                </div>                     \n            </div> \n          </div>\n        <div class=\"row\">                        \n                <div class=\"col-md-10\"> \n                <form class=\"form-horizontal\">\n                  <fieldset> \n                    <div class=\"form-group\">\n                        <label class=\"col-md-4 control-label\" for=\"Brand\"> </label>  \n                        <br>\n                        <div class=\"col-md-6\">\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Page Tittle\" class=\"form-control input-md\">\n                          <span class=\"help-block\"> </span>  \n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <label class=\"psln-labText\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\n                        <div class=\"col-md-4\">\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-0\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                            Cleaning\n                          </label>\n                        </div>\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-1\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                            Off - Site Help\n                          </label>\n                        </div>\n                        </div>                        \n                    </div>  \n                    <div class=\"form-group\"> \n                        <div class=\"col-md-2\" align=\"center\">\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Next Question</a> \n                          \n                        </div>\n                        <div class=\"col-md-4 psln-rightNav\"  align=\"right\">\n                            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Save</a> \n                            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">Cancel</a> \n                          </div>\n                      </div>  \n                </fieldset>\n              </form>\n                </div>\n          </div>\n         \n   \n    </div> "

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 150px;\n    color: #fff;\n    padding-left: 4%;    \n    background-color: #583A98;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 7em;\n    width: 8em;\n    position: relative;\n    margin: 1%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}\n.psln-Text{\n    color: #583A98;\n}\n.psln-labText{\n    color: #583a98;\n    font-size: 1.5em;\n    padding: 1%;\n}\n.psln-rightNav{\n    float: right;\n}\n\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnSave{\n    color:#fff;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/ADD.svg") + ") no-repeat; \n    background-color:#009CA7;\n    background-size: 25px;\n    background-position: left;    \n    width: 220px;\n    background-position-x: 10px;\n}\n.psln-btnFoot{\n    color:#fff;\n    border-radius: 30px;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \n    background-color:#583A98;\n    background-size: 25px;\n    background-position: left; \n    width: 220px;   \n    background-position-x: 10px;\n}\n.psln-copy{\n    border-radius: 30px;\n    background-color: #928E8F;\n    color: #fff; \n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/question-template/question-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Dashboard / Forms\n  </nav>\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n        <div class=\"container psln-navSearch\"> \n            <div class=\"form-group\"> \n                <div class=\"col-md-12\">\n                    <p style=\"color:#fff;font-size:1.3em\">Form Title</p>\n                </div>                     \n            </div> \n          </div>\n        <div class=\"row\">                        \n                <div class=\"col-md-10\"> \n                <form class=\"form-horizontal\">\n                  <fieldset> \n                    <div class=\"form-group\">\n                        <label class=\"col-md-4 control-label\" for=\"Brand\"> </label>  \n                        <br>\n                        <div class=\"col-md-6\">\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Page Tittle\" class=\"form-control input-md\">\n                          <span class=\"help-block\"> </span>  \n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <label class=\"psln-labText\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\n                        <div class=\"psln-rightNav\">\n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Edit</a> \n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-waitlist\">Move</a> \n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-copy\">Copy</a> \n                           <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-delete\">Delete</a> \n                        </div>\n                        <br>\n                        <div class=\"col-md-4\">\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-0\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                            Cleaning\n                          </label>\n                        </div>\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-1\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                            Off - Site Help\n                          </label>\n                        </div>\n                        </div>                        \n                    </div>  \n                    <div class=\"form-group\"> \n                        <div class=\"col-md-12\" align=\"center\">\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\" routerLink=\"/newQuestion\">New Question</a> \n                        </div>\n                      </div>  \n                </fieldset>\n              </form>\n                </div>\n          </div>\n         \n   \n    </div>\n    <div class=\"container\">\n    <div class=\"col-md-12 psln-divFoot\" align=\"center\">\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Save Template</a> \n    </div>\n    </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    color: #fff; \n    padding-left: 15%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \n    background-color:#009CA7;\n    background-size: 25px;\n    background-position: left; \n    width: 150px;   \n    background-position-x: 10px;\n    margin-bottom:5%;\n    margin-top: 5%;\n}\n.psln-notes{\n    border-radius: 30px;\n    color: #fff;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\n    background-color: #583A98;\n    background-size: 25px;\n    background-position: left;\n    background-position-x: 10px;\n    width: 103px;\n    padding-left: 13%;\n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%\n}\n.lead{\n    color: #583A98;\n}\n.psln-option{\n    height: 44px;\n    border-radius: 21px;\n    border: none;\n}\n.psln-rightNav{\n    float: right;\n}\n.psln-twoCol{ \n    margin-top:8%;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/resume-message/resume-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Rescue Network </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Tools / Rescue Network\n  </nav>\n  \n<div class=\"container\">\n    <br>  \n    <div class=\"col-md-3\">\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Back</a> \n    </div>  \n</div> \n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    <div class=\"col-md-12\">\n        <div class=\"lead\" style=\"float:left;\">Minnesota Rescues</div> \n        <div class=\"psln-rightNav\">\n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-waitlist\">Message</a> \n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-delete\">Transfer</a>  \n        </div>\n        <div class=\"psln-twoCol\">\n            <form class=\"form-horizontal\">\n            <div class=\"form-group\" style=\"float: left;\">\n                <div class=\"col-sm-4\">\n                    <img  class=\"psln-imgPet\" src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\">\n                </div>\n            </div>\n            <div style=\"display:inline-block; margin-left: 5%;\" >\n            <div class=\"form-group\">\n               \n              <div class=\"col-md-12\">\n              \n                  <p><span>Name </span> <span>General Info</span></p>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                \n               <div class=\"col-md-12\">\n               \n                   <p><span>Name </span> <span>General Info</span></p>\n               </div>\n             </div>\n             <div class=\"form-group\">\n                \n               <div class=\"col-md-12\">\n               \n                   <p><span>Name </span> <span>General Info</span></p>\n               </div>\n             </div>\n            \n             <div class=\"form-group\">\n                \n               <div class=\"col-md-12\">\n               \n                   <p><span>Name </span> <span>General Info</span></p>\n               </div>\n             </div>\n            \n             <div class=\"form-group\">\n                \n               <div class=\"col-md-12\">\n               \n                   <p><span>Name </span> <span>General Info</span></p>\n               </div>\n             </div>\n            </div>\n            </form>\n          </div> \n          <h3>About Us</h3>\n          <p> \n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n          </p>  \n          <h3>Mission</h3>\n          <p> \n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n            Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n          </p>  \n    </div>     \n           \n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 9em;\n    width: 11em;\n    position: relative;\n    margin: 1%;\n}\n.psln-imgAdd{\n    margin-top: 30%;\n    padding-bottom: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/template/email-template/email-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">E-mail Templates</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Contact / E-mail Templates\n  </nav>\n  <div class=\"container\"> \n    <br>\n    <div > \n      \t<div class=\"row\">\n            <div class=\"col-md-4\">\n            <a class=\"btn btn-default add-new-button\" routerLink=\"/newTemplate\">\n              <img class=\"psln-imgAdd\" src=\"../assets/img/ADD.svg\" width=\"50\">\n              <br>  \n              <span>Create New Template</span>\n            </a>      \n            </div>      \n        </div>\n    </div>\n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n        position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 7em;\n    width: 8em;\n    position: relative;\n    margin: 1%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}\n.psln-btnSave{\n    color:#fff;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \n    background-color:#009CA7;\n    background-size: 25px;\n    background-position: left;    \n    width: 220px;\n    background-position-x: 10px;\n}\n.psln-btnFoot{\n    color:#fff;\n    border-radius: 30px;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \n    background-color:#583A98;\n    background-size: 25px;\n    background-position: left; \n    width: 220px;   \n    background-position-x: 10px;\n    margin-bottom:5%;\n    margin-top: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/template/new-template/new-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Email Templates</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Contact / Email Templates\n  </nav>\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n        <div class=\"container psln-navSearch\"> \n            <div class=\"form-group\"> \n                <div class=\"col-md-12\">\n                    <p style=\"color:#fff;font-size:1.3em\">Email template tittle</p>\n                </div>                     \n            </div> \n          </div>\n        <div class=\"row\">                        \n                <div class=\"col-md-10\"> \n                    <h3>Thank You For Applying</h3>\n                <form class=\"form-horizontal\">\n                  <fieldset> \n                    <div class=\"form-group\">\n                        <label class=\" \" for=\"Brand\">     Enter Recipients     </label>  \n                        <br>\n                        <div class=\"col-md-6\">\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Title Here\" class=\"form-control input-md\">\n                          <span class=\"help-block\"> </span>  \n                        </div>\n                    </div>  \n                    <div class=\"form-group\">\n                        <label class=\" \" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\n                        <br> \n                        <div class=\"col-md-4\">\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-0\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                Grant Writing                                \n                              </label>\n                            </div>\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-1\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                Marketing\n                              </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-0\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                Cleaning\n                              </label>\n                            </div>\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-1\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                Off - Site Help\n                              </label>\n                            </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"checkbox\">\n                                  <label for=\"checkboxes-0\">\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                    Grant Writing                                \n                                  </label>\n                                </div>\n                                <div class=\"checkbox\">\n                                  <label for=\"checkboxes-1\">\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                    Marketing\n                                  </label>\n                                </div>\n                            </div>                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"\" for=\"often\">Message</label>  \n                        <br>\n                        <div class=\"col-md-12\">\n                            <textarea class=\"form-control\" id=\"speneeds\" name=\"speneeds\">\n                                Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</textarea>\n                   \n                        </div>\n                    </div>   \n                    <div class=\"form-group\"> \n                        <div class=\"col-md-12\" align=\"center\">\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnSave\">Send Email</a> \n                        </div>\n                      </div>  \n                </fieldset>\n              </form>\n                </div>\n          </div>\n         \n             \n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-12 psln-divFoot\" align=\"center\">\n          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Save Template</a> \n      </div>\n      "

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 7em;\n    width: 8em;\n    position: relative;\n    margin: 1%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}\n.psln-Text{\n    color: #583A98;\n}\n.psln-labText{\n    color: #583a98;\n    font-size: 1.5em;\n    padding: 1%;\n}\n.psln-btnFoot{\n    color:#fff;\n    border-radius: 5px;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \n    background-color:#583A98;\n    background-size: 25px;\n    background-position: left; \n    width: 220px;   \n    background-position-x: 10px;\n    margin-bottom:5%;\n    margin-top: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/volunteer-opportunities/volunteer-opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Volunteer Opportunities</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Contact / Volunteer Opportunities\n  </nav>\n    <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n        <div class=\"container psln-navSearch\"> \n            <div class=\"form-group\"> \n                <div class=\"col-md-4\">\n                    <p style=\"color:#fff;font-size:1.3em\">Opportunities Specs</p>\n                </div>\n                <div class=\"col-md-4\">\n                        <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                        <option value=\"1\">Option one</option>\n                        <option value=\"2\">Option two</option>\n                        </select>\n                </div>\n                <div class=\"col-md-4\">\n                        <p style=\"color:#fff;font-size:1.3em\">Expedition Date:</p>\n                </div> \n                    \n            </div> \n          </div>\n        <div class=\"row\">                        \n                <div class=\"col-md-10\"> \n                    <h2 class=\"psln-Text\">About</h2>\n                    <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</p>\n                <form class=\"form-horizontal\">\n                  <fieldset> \n                    <div class=\"form-group\">\n                        <label class=\"psln-labText control-label\" for=\"Brand\">Volunteer Opportunitie Title</label>  \n                        <br>\n                        <div class=\"col-md-12\">\n                          <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Title Here\" class=\"form-control input-md\">\n                          <span class=\"help-block\"> </span>  \n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <label class=\"psln-labText control-label\" for=\"speneeds\">Volunteer Opportunitie Description </label>\n                        <br>\n                        <div class=\"col-md-12\">                     \n                          <textarea class=\"form-control\" id=\"speneeds\" name=\"speneeds\">\n                              Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.</textarea>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"psln-labText control-label\" for=\"checkboxes\">Volunteer Work Types (Select all that apply)</label>\n                        <br>\n                        <div class=\"col-md-3\">\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-0\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                            Cleaning\n                          </label>\n                        </div>\n                        <div class=\"checkbox\">\n                          <label for=\"checkboxes-1\">\n                            <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                            Off - Site Help\n                          </label>\n                        </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-0\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                Grant Writing                                \n                              </label>\n                            </div>\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-1\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                Marketing\n                              </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-0\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                Cleaning\n                              </label>\n                            </div>\n                            <div class=\"checkbox\">\n                              <label for=\"checkboxes-1\">\n                                <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                Off - Site Help\n                              </label>\n                            </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"checkbox\">\n                                  <label for=\"checkboxes-0\">\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-0\" value=\"1\">\n                                    Grant Writing                                \n                                  </label>\n                                </div>\n                                <div class=\"checkbox\">\n                                  <label for=\"checkboxes-1\">\n                                    <input type=\"checkbox\" name=\"checkboxes\" id=\"checkboxes-1\" value=\"2\">\n                                    Marketing\n                                  </label>\n                                </div>\n                            </div>                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"psln-labText control-label\" for=\"often\">Event Day(s)</label>  \n                        <br>\n                        <div class=\"col-md-12\">\n                        <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\n                        <span class=\"help-block\"> </span>  \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"psln-labText control-label\" for=\"often\">Estimate Volunteer Hours</label>  \n                        <br>\n                        <div class=\"col-md-12\">\n                        <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\n                        <span class=\"help-block\"> </span>  \n                        </div>\n                    </div>   \n                    <div class=\"form-group\"> \n                        <div class=\"col-md-12\" align=\"center\">\n                          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">Post</a> \n                        </div>\n                      </div>  \n                </fieldset>\n              </form>\n                </div>\n          </div>\n         \n             \n    </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n    cursor: pointer;\n}\n.psln-navUsersText:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n    cursor: pointer;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\n    background-color: #fff;\n    background-size: 25px;\n    background-position: right;    \n    background-position-x: 260px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/adoption-application/adoption-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n        <h1 class=\"display-4 psln-oracleText\">Adoption Application</h1>\n    </div>\n</div>\n<nav class=\"psln-navUsers\">\n    Dashboard / Adoption Application\n</nav>\n<div class=\"container\">\n    <div class=\"col-sm-4\">\n        <div class=\"container\">\n            <br>\n            <p class=\"lead\">Adoption Application</p>\n            <div class=\"addPet\">\n                <form>\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" placeholder=\"Search...\">\n                </form>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\n                        <li>\n                            <a class=\"psln-navUsersText2\">Filled Out Applications</a>\n                        </li>\n                        <li>\n                            <a class=\"psln-navUsersText2\">Common Aplication</a>\n                        </li>\n                        <li>\n                            <a class=\"psln-navUsersText2\">Foster Application</a>\n                        </li>\n                        <li>\n                            <a class=\"psln-navUsersText2\">Volunteer Application</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"psln-contentGeneral\">\n        <div class=\"col-sm-8\">\n            <div class=\"bs-calltoaction bs-calltoaction-default\">\n                <div class=\"row\">\n                    <div class=\"col-md-9 cta-contents\">\n                        <div class=\"cta-desc\">\n                            <p>Describe the action here.</p>\n                            <p>Describe the action here.</p>\n                            <p>Describe the action here.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 cta-button\">\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a>\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px; \n    padding-right: 1%;\n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    font-family: latoCustom; \n    text-align: -webkit-center;\n    display: -webkit-box;\n    margin-right: 26%;\n}\n#psln-panel{\n    width: 75%;\n    float: right;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n    margin-bottom: 0px;\n    background-color: #fff;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 48px;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 24px;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n \n\n.imgCustom{\n    max-width: 66%;\n}\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n    .imgCustom{\n        max-width: 90%;\n    }\n  }\n  \n  @media (max-width:1200px) {   \n    .psln-text{ \n        margin-right: 9%;\n    }\n  }\n  @media (max-width:725px) {   \n    .psln-text{ \n        margin-right: 1%;\n    }\n }\n    @media (max-width:673px) {   \n        .psln-text{ \n          font-size: 0.7em;\n    }\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\" >\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Dashboard</h1>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\"> \n            <app-sidebar></app-sidebar>        \n        <div class=\"col-md-6\" id=\"psln-panel\">\n            <div class=\"panel\" id=\"psln-panelBody\">\n                <div class=\"panel-body\"> \n                    <div class=\"row\">        \n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                            <a routerLink=\"/pets\"><img   src=\"assets/img/Pets.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Pets</span>\n                        </div>            \n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\n                            <a routerLink=\"/adoption\"><img src=\"assets/img/AdoptionApplication.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Adoption Application</span>\n                        </div>            \n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                            <a routerLink=\"/forms\"><img src=\"assets/img/Forms.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Forms</span>\n                        </div>      \n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter irrigation\">\n                            <a routerLink=\"/waitList\"><img src=\"assets/img/Waitlist.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Wait List</span>\n                        </div>\n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter spray\">\n                            <a routerLink=\"/doNot\"><img src=\"assets/img/DoNotAdoptList.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Do Not Adopt</span>\n                        </div>            \n                        <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter irrigation\">\n                            <a routerLink=\"/managePeople\"><img src=\"assets/img/managePeople.svg\" class=\"img-responsive imgCustom\"></a>\n                            <span class=\"psln-text\">Manage People</span>\n                        </div> \n                    </div>                     \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n    <div class=\"container\">\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n        <a class=\"display-4 psln-btnContact\" (click)=\"logout()\">Contact Us</a>\n    </div>\n</div>\n\n  \n  "

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/do-not-adopt/do-not-adopt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Do Not Adopt List </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Dashboard / Do Not Adopt List  \n  </nav>\n  <div class=\"container psln-navSearch\"> \n        <div class=\"form-group\"> \n            <div class=\"col-md-3\">\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                <option value=\"1\">Option one</option>\n                <option value=\"2\">Option two</option>\n                </select>\n            </div>\n            <div class=\"col-md-3\">\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                    <option value=\"1\">Option one</option>\n                    <option value=\"2\">Option two</option>\n                    </select>\n            </div>\n            <div class=\"col-md-3\">\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                    <option value=\"1\">Option one</option>\n                    <option value=\"2\">Option two</option>\n                    </select>\n            </div>\n            <div class=\"col-md-3\">\n                    <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                    <option value=\"1\">Option one</option>\n                    <option value=\"2\">Option two</option>\n                    </select>\n            </div>\n                \n        </div> \n      </div>\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    \t<div class=\"row\">                        \n              <div class=\"col-md-12\"> \n              <div class=\"table-responsive\">\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \n                     <thead>\n                      <th> </th>\n                      <th>Name</th>\n                      <th>Species</th>\n                      <th>Breed</th>\n                      <th>Date</th>\n                      <th>Manage</th> \n                     </thead>\n      <tbody>          \n      <tr>\n          <td>1</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a>\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n          \n       <tr>\n          <td>2</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>3</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n          \n       <tr>\n          <td>4</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a> \n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>5</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Manage</a>\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a>\n          <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n         \n          \n         \n          \n      </tbody>\n              \n      </table>\n                      \n                  </div>\n                  \n              </div>\n        </div>\n       \n           \n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 150px;\n    color: #fff;\n    padding-left: 4%;    \n    background-color: #583A98;\n}\n.add-new-button {  \n    font-size: 1.5em;\n    line-height: 1.1em;\n    color: #ffffff;\n    background-color: #583A98;\n    height: 7em;\n    width: 8em;\n    position: relative;\n    margin: 1%;\n}\n.psln-imgAdd{\n    padding-top: 30%;\n    padding-bottom: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Forms</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Dashboard / Forms\n  </nav>\n  <div class=\"container\"> \n    <br>\n    <div class=\" panel\"> \n      \t<div class=\"row\">\n            <div class=\"col-md-4\">\n            <a class=\"btn btn-default add-new-button\" routerLink=\"\">\n              <img class=\"psln-imgAdd\" src=\"assets/img/ADD.svg\" width=\"50\">\n              <br>\n              <span>Add New Form </span>\n            </a>      \n            </div>      \n       \n          <div class=\"col-md-6\">    \n              <form class=\"form-horizontal\">\n                  <fieldset> \n                  <!-- Text input-->\n                  <br>\n                  <div class=\"col-md-12\">\n                  <!-- Text input-->\n                  <div class=\"form-group\">\n                    <label class=\"\" for=\"Brand\">Add Form Tittle</label>  \n                    <br>\n                    <div class=\"col-md-6\">\n                    <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Brand\" class=\"form-control input-md\">\n                    <span class=\"help-block\"> </span>  \n                    </div>\n                  </div>\n                  \n                  <!-- Text input-->\n                  <div class=\"form-group\">\n                    <label class=\"\" for=\"much\">Select Form Template</label>  \n                    <br>\n                    <div class=\"col-md-6\">\n                    <input id=\"much\" name=\"much\" type=\"text\" placeholder=\"How Much\" class=\"form-control input-md\">\n                    <span class=\"help-block\"> </span>  \n                    </div>\n                  </div> \n                  <div class=\"form-group\"> \n                    <div class=\"col-md-6\" align=\"center\">\n                      <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnPlace\" routerLink=\"/QuestionTemplate\">Save</a> \n                    </div>\n                  </div>\n                  </div>\n                  </fieldset>\n                  </form>\n          </div> \n        </div>\n    </div>\n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 110%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-active{\n    background-color: rgba(196, 245, 255, 0.47) !important;\n    color: #583A98 !important; \n    cursor: pointer;\n}\n.psln-navUsersText:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n    cursor: pointer;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\n    background-color: #fff;\n    background-size: 25px;\n    background-position: right;    \n    background-position-x: 260px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/manage-people/manage-people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n        <h1 class=\"display-4 psln-oracleText\">People Management</h1>\n    </div>\n</div>\n<nav class=\"psln-navUsers\">\n    Dashboard / People Management\n</nav>\n<div class=\"container\">\n    <div class=\"col-sm-4\">\n        <div class=\"container\">\n            <br>\n            <p class=\"lead\">People Management</p>\n            <div class=\"addPet\">\n                <form>\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\"  [(ngModel)]=\"filter\" placeholder=\"Search...\">\n                </form>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\n                        <li>\n                            <a (click)=\"listVolunteers()\" id=\"volun\" class=\"psln-navUsersText2 psln-active\">Volunteers</a>\n                        </li>\n                        <li>\n                            <a (click)=\"listFosters()\" id=\"fost\" class=\"psln-navUsersText2\">Fosters</a>\n                        </li>\n                        <li>\n                            <a (click)=\"listEmployees()\" id=\"emplo\" class=\"psln-navUsersText2\">Employees</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"psln-contentGeneral\">\n        <div class=\"col-sm-8\">\n            <div class=\"bs-calltoaction bs-calltoaction-default\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"table-responsive\">\n                            <table id=\"mytable\" class=\"table table-bordred  \">\n                                <thead>\n                                    <th> </th>\n                                    <th>Bulk</th>\n                                    <th>Name</th>\n                                    <th>Date</th>\n                                    <th style=\"text-align: center;\">Manage</th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of volunteers |userfilter:filter\">\n                                        <td></td>\n                                        <td></td>\n                                        <td>{{user.firstname}} {{user.lastname}}</td>\n                                        <td>{{user.birthDate}}</td>\n                                        <!-- <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n                    <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>-->\n                                        <td>\n                                            <a (click)=\"deleteUser(user)\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n\n                            </table>\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

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
    function ManagePeopleComponent(managepeopleService, toastr, router) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_managepeople_service__["a" /* ManagepeopleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_managepeople_service__["a" /* ManagepeopleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ManagePeopleComponent);

var _a, _b, _c;
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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 100%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.control-label{\n    color: #583A98;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.psln-threeCol{\n    -webkit-column-count: 3;\n            column-count: 3;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 300px;\n    height: 280px;\n    border-radius: 30px;\n}\n.psln-btnSave{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #009CA7;\n    color: #fff;\n}\n.psln-btnCancel{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #a7a7b5;\n    color: #fff;\n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n.psln-btnFoot{\n    border-radius: 25px;\n    width: 150px;\n    margin-left: 5%;\n    background-color: #662D91;\n    color: #fff;\n}\n/* Upload Image */\n\n.dragarea{\n    height: 280px;\n    border: 1px solid;\n    padding: 16%;\n    margin-top: 2%;\n    margin-left: 24%;\n    background-image:url('http://34.215.129.201:3000/assets/img/pets.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.textLoad{\n    position: absolute;\n    margin-top: -82px;\n    width: 100%;\n    left: 0;\n}\n.none{\n    display: none;\n}\n.textInfo{\n    font-size: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/new-pet/new-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">New Pets</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\n  Dashboard / New Pets\n</nav>\n<div class=\"container\">\n  <div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <!-- Text input-->\n        <div class=\"psln-threeCol\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-12\">\n\n              <div class=\"dragarea\" id=\"preImage\">\n                <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"4\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\n                  (change)=\"readUrl($event)\">\n                </app-file-upload>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"name\">Name</label>\n            <div class=\"col-md-8\">\n              <input id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"pet.name\" placeholder=\"Name\" class=\"form-control input-md\">\n\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"intake\">Intake Date</label>\n            <div class=\"col-md-8\">\n              <input id=\"intake\" name=\"intake\" type=\"date\" [(ngModel)]=\"pet.intakeDate\" placeholder=\"Intake Date\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"age\"> Age</label>\n            <div class=\"col-md-8\">\n              <input id=\"age\" name=\"age\" type=\"text\" [(ngModel)]=\"pet.ageYears\" placeholder=\"Age\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n          <!-- Select input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Species\">Species</label>\n            <div class=\"col-md-8\">\n              <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"pet.PetSpeciesId\">\n                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\n              </select>\n            </div>\n          </div>\n          <!-- Select input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Breed\">Breed</label>\n            <div class=\"col-md-8\">\n              <input id=\"Breed\" name=\"Breed\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.breedName\" placeholder=\"Breed\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Color\">Color</label>\n            <div class=\"col-md-8\">\n              <input id=\"Color\" name=\"Color\" type=\"text\" [(ngModel)]=\"pet.color\" placeholder=\"Color\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"marking\">Special Markings</label>\n            <div class=\"col-md-8\">\n              <input id=\"marking\" name=\"marking\" type=\"text\" [(ngModel)]=\"pet.specialMarkings\" placeholder=\"Special Markings\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Weight\">Weight</label>\n            <div class=\"col-md-8\">\n              <input id=\"Weight\" name=\"Weight\" type=\"text\" [(ngModel)]=\"pet.weight\" placeholder=\"Weight\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Location\">Location</label>\n            <div class=\"col-md-8\">\n              <input id=\"Location\" name=\"Location\" type=\"text\" [(ngModel)]=\"pet.location\" placeholder=\"Location\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Status\">Status</label>\n            <div class=\"col-md-8\">\n              <select id=\"Status\" name=\"Status\" class=\"form-control\" [(ngModel)]=\"pet.status\">\n                <option value=\"Adoptables\">Adoptables</option>\n                <option value=\"Medical Hold\">Medical Hold</option>\n                <option value=\"Sanctuary\">Sanctuary</option>\n                <option value=\"Adopted\">Adopted</option>\n                <option value=\"Transferred\">Transferred</option>\n                <option value=\"Euthanized\">Euthanized</option>\n              </select>\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"date\">Out Date</label>\n            <div class=\"col-md-8\">\n              <input id=\"date\" name=\"date\" type=\"date\" [(ngModel)]=\"pet.outOfDate\" placeholder=\"Out Date\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"col-md-12\">\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <div class=\"col-md-2\">\n                <label class=\"col-md-12 control-label\" for=\"Brand\">Food Brand<br> <span class=\"textInfo\">(Dietary Information)</span></label>  \n            </div> \n            <div class=\"col-md-8\">\n              <input id=\"Brand\" name=\"Brand\" type=\"text\" [(ngModel)]=\"pet.foodBrand\" placeholder=\"Food Brand\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"much\">How Many Cups of Food?</label>\n            <div class=\"col-md-8\">\n              <input id=\"much\" name=\"much\" type=\"text\" [(ngModel)]=\"pet.foodAmount\" placeholder=\"How Many Cups of Food?\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"often\">How Often</label>\n            <div class=\"col-md-8\">\n              <input id=\"often\" name=\"often\" type=\"text\" [(ngModel)]=\"pet.foodPerDay\" placeholder=\"How Often\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Textarea -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"Instructions\">Instructions</label>\n            <div class=\"col-md-8\">\n              <textarea class=\"form-control\" id=\"Instructions\" [(ngModel)]=\"pet.instructions\" name=\"Instructions\"> Description....</textarea>\n            </div>\n          </div>\n\n          <!-- Multiple Radios (inline)  Organizar-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"radios\">Special Needs</label>\n            <div class=\"col-md-8\">\n              <label class=\"radio-inline\" for=\"radios-0\">\n                <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"\" checked=\"checked\"> Yes\n              </label>\n              <label class=\"radio-inline\" for=\"radios-1\">\n                <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"\"> No\n              </label>\n            </div>\n          </div>\n\n          <!-- Textarea -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"speneeds\"> </label>\n            <div class=\"col-md-8\">\n              <textarea class=\"form-control\" id=\"speneeds\" [(ngModel)]=\"pet.textArea\" name=\"speneeds\">Description.... </textarea>\n            </div>\n          </div>\n\n          <!-- Button (Double) -->\n          <div class=\"form-group\">\n            <div class=\"col-md-12\" align=\"center\">\n              <a id=\"button1id\" name=\"button1id\" (click)=\"createPet(pet)\" class=\"btn btn-lg  btn-default psln-btnSave\">Save</a>\n              <a id=\"button2id\" name=\"button2id\" routerLink=\"/pets\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n\n  </div>\n  <div class=\"col-md-12 psln-divFoot\" align=\"center\">\n    <!-- <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> Documents</a>\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/notes.svg\" width=\"25\" height=\"25\"> Notes</a>\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> History</a>-->\n  </div>\n</div>"

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
        if (this.pet.specialMarkings != "") {
            this.toastr.error('Required Special Markings!', 'Oops!', { showCloseButton: true });
            document.getElementById("marking").focus();
            return false;
        }
        if (this.pet.color != "") {
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
        if (this.pet.ageYears != "") {
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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    margin-top: 60px;\n    width: 100%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.control-label{\n    color: #583A98;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.psln-threeCol{\n    -webkit-column-count: 3;\n            column-count: 3;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 300px;\n    height: 280px;\n    border-radius: 30px;\n}\n.psln-btnSave{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #009CA7;\n    color: #fff;\n}\n.psln-btnCancel{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #dc4468;\n    color: #fff;\n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n.psln-btnFoot{\n    border-radius: 25px;\n    width: 150px;\n    margin-left: 5%;\n    background-color: #662D91;\n    color: #fff;\n}\n/* Upload Image */\n\n.textInfo{\n    font-size: 12px;\n}\n.dragarea{\n    height: 280px;\n    border: 1px solid;\n    padding: 16%;\n    margin-top: 2%;\n    margin-left: 24%;\n    background-image:url('http://34.215.129.201:3000/assets/img/pets.jpg');   \n     background-repeat: no-repeat;\n    background-size: cover;\n}\n.textLoad{\n    position: absolute;\n    margin-top: -82px;\n    width: 100%;\n    left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/petdetail/petdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\"> Pet Profile</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\n  Dashboard / Pet Profile\n</nav>\n<div class=\"container\">\n  <div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <!-- Text input-->\n        <div class=\"psln-threeCol\">\n          <div class=\"form-group\"> \n            <div class=\"dragarea\" id=\"preImage\">\n                <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"4\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\n                  (change)=\"readUrl($event)\">\n                </app-file-upload>\n\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"name\">Name</label>\n            <div class=\"col-md-8\">\n              <input id=\"name\" name=\"name\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.name\" placeholder=\"Name\" class=\"form-control input-md\">\n\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"intake\">Intake Date</label>\n            <div class=\"col-md-8\">\n              <input id=\"intake\" name=\"intake\" type=\"date\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.intakeDate\" placeholder=\"Intake Date\"\n                class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"age\"> Age</label>\n            <div class=\"col-md-8\">\n              <input id=\"age\" name=\"age\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.ageYears\" placeholder=\"Age\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n          <!-- Select input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Species\">Species</label>\n            <div class=\"col-md-8\">\n              <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"pet.PetSpeciesId\" [disabled]=\"is_edit\">\n                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\n              </select>\n            </div>\n          </div>\n          <!-- Select input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Breed\">Breed</label>\n            <div class=\"col-md-8\">\n              <input id=\"Breed\" name=\"Breed\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.petBreed\" placeholder=\"Breed\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span> \n            </div>\n          </div>\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Color\">Color</label>\n            <div class=\"col-md-8\">\n              <input id=\"Color\" name=\"Color\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.color\" placeholder=\"Color\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"marking\">Special Markings</label>\n            <div class=\"col-md-8\">\n              <input id=\"marking\" name=\"marking\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.specialMarkings\" placeholder=\"Special Markings\"\n                class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Weight\">Weight</label>\n            <div class=\"col-md-8\">\n              <input id=\"Weight\" name=\"Weight\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.weight\" placeholder=\"Weight\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Location\">Location</label>\n            <div class=\"col-md-8\">\n              <input id=\"Location\" name=\"Location\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.location\" placeholder=\"Location\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"Status\">Status</label>\n            <div class=\"col-md-8\">\n              <select id=\"Status\" name=\"Status\" class=\"form-control\" [(ngModel)]=\"pet.status\" [disabled]=\"is_edit\">\n                <option value=\"Adoptables\">Adoptables</option>\n                <option value=\"Medical Hold\">Medical Hold</option>\n                <option value=\"Sanctuary\">Sanctuary</option>\n                <option value=\"Adopted\">Adopted</option>\n                <option value=\"Transferred\">Transferred</option>\n                <option value=\"Euthanized\">Euthanized</option>\n              </select>\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"date\">Out Date</label>\n            <div class=\"col-md-8\">\n              <input id=\"date\" name=\"date\" type=\"date\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.outOfDate\" placeholder=\"Out  Date\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"col-md-12\">\n          <!-- Text input-->\n          <div class=\"form-group\">\n              <div class=\"col-md-2\">\n                  <label class=\"col-md-12 control-label\" for=\"Brand\">Food Brand<br> <span class=\"textInfo\">(Dietary Information)</span></label>  \n              </div> \n            <div class=\"col-md-8\">\n              <input id=\"Brand\" name=\"Brand\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodBrand\" placeholder=\"Brand\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"much\">How Many Cups of Food?</label>\n            <div class=\"col-md-8\">\n              <input id=\"much\" name=\"much\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodAmount\" placeholder=\"How Many Cups of Food?\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Text input-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"often\">How Often</label>\n            <div class=\"col-md-8\">\n              <input id=\"often\" name=\"often\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.foodPerDay\" placeholder=\"How Often\" class=\"form-control input-md\">\n              <span class=\"help-block\"> </span>\n            </div>\n          </div>\n\n          <!-- Textarea -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"Instructions\">Instructions</label>\n            <div class=\"col-md-8\">\n              <textarea class=\"form-control\" id=\"Instructions\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.instructions\" name=\"Instructions\"> Description....</textarea>\n            </div>\n          </div>\n\n          <!-- Multiple Radios (inline)  Organizar-->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"radios\">Special Needs</label>\n            <div class=\"col-md-8\">\n              <label class=\"radio-inline\" for=\"radios-0\">\n                <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"\" checked=\"checked\"> Yes\n              </label>\n              <label class=\"radio-inline\" for=\"radios-1\">\n                <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"\"> No\n              </label>\n            </div>\n          </div>\n\n          <!-- Textarea -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"speneeds\"> </label>\n            <div class=\"col-md-8\">\n              <textarea class=\"form-control\" id=\"speneeds\" [disabled]=\"is_edit\" [(ngModel)]=\"pet.textArea\" name=\"speneeds\">Description.... </textarea>\n            </div>\n          </div>\n\n          <!-- Button (Double) -->\n          <div class=\"form-group\">\n            <div class=\"col-md-12\" align=\"center\">\n              <a id=\"button1id\" name=\"button1id\" (click)=\"updatePet(pet)\" class=\"btn btn-lg  btn-default psln-btnSave\">{{btnEdit}}</a>\n              <a id=\"button2id\" name=\"button2id\" (click)=\"deletePet()\"   class=\"btn btn-lg  btn-default psln-btnCancel\">Delete</a>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n\n  </div>\n  <div class=\"col-md-12 psln-divFoot\" align=\"center\">\n    <!--<a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> Documents</a>\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/notes.svg\" width=\"25\" height=\"25\"> Notes</a>\n    <a id=\"button2id\" name=\"button2id\" class=\"btn btn-lg  btn-default psln-btnFoot\">\n      <img src=\"assets/img/history.svg\" width=\"25\" height=\"25\"> History</a>-->\n  </div>\n</div>"

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
        if (this.pet.specialMarkings != "") {
            this.toastr.error('Required Special Markings!', 'Oops!', { showCloseButton: true });
            document.getElementById("marking").focus();
            return false;
        }
        if (this.pet.color != "") {
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
        if (this.pet.ageYears != "") {
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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-active{\n    background-color: rgba(196, 245, 255, 0.47) !important;\n    color: #583A98 !important; \n    cursor: pointer;\n}\n.psln-navUsersText:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n    cursor: pointer;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    text-align: center;\n    text-align-last: center;\n    background-color: #583A98;\n    color: white;\n    font: inherit;\n    font-size: 18px;\n    /*Remove original arrow*/\n    -webkit-appearance: none;\n    /*Set the background of the button to our new arrow*/\n    background: url(http://34.215.129.201:3000/assets/img/arrow.svg) no-repeat 85% #583A98;\n    background-size: 20px;\n    height: 45px;\n}\n\n\nselect option{\n    background-color: white;\n    color: gray;\n}\n\n\n.addPet{\n    display: -webkit-inline-box;\n    position: relative;\n    margin-right: 10%;\n    margin-top: 1%;\n    z-index: 999;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff;  \n    margin-left: 10%;     \n    width: 200px;\n    padding-left: 5%;\n    padding-right: 5%;\n    z-index: 999;\n}\n.psln-contentGeneral{\n    margin-top: 11%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 400px;\n    padding-left: 4%; \n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\n    background-color: #fff;\n    background-size: 25px;\n    background-position: right;\n    background-position-x: 360px;\n}\n.psln-imgAsset{\n    padding-left: 10%;\n}\n.sub-text{\n    color: #583A98;\n    text-decoration: none;\n    padding-right: 4%;\n    font-size: 17px;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 7%;\n    height: 66px;\n    padding-top: 1.4%;\n    border-radius: 41px;    \n}\n\n.searchDiv{\n    margin-left: -57%;\n}\n.newPetDiv{\n    margin-left: 88%;\n}\n.dropdownFPP{\n    background-color: #fff;\n    height: 49px;\n    margin-top: -8px;\n    border-radius: 38px;\n}\n.psln-btnSearch{\n    border-radius: 25px;\n    border: 1px solid transparent;\n    color:#fff; \n    height: 45px;\n    width: 50px;\n    padding-left: 4%; \n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat; \n    background-size: 25px;\n    background-position: right;\n    background-position-x: 10px;\n}\n.col-md-psln{\n    width: 18%;\n    float: left;\n    margin-left: 0%;\n    margin-right: 47.8px;\n}\n\n#colSearch{\n    width: 7%;\n}\n#btnSearch{\n    margin-top: -7px;\n}\n.img-circle{\n    width: 150px;\n    height: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pet/pets/pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Pets</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / Pets\n</nav>\n<div class=\"container\">\n    <div class=\"addPet\"> \n        <div class=\"searchDiv\">\n            <form>\n                <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\"  [(ngModel)]=\"filter\" placeholder=\"Search by Pet´s Name, ID,Microchip ID...\">\n            </form>\n        </div>\n        <div class=\"newPetDiv\">\n            <a routerLink=\"/newPet\" class=\"btn btn-lg btn-block btn-default psln-btnNewPet\">Add New Pet<img class=\"psln-imgAsset\" src=\"assets/img/ADD.svg\" width=\"45\"></a>\n        </div>\n    </div>\n<div class=\"col-sm-4\">\n    <div class=\"container\">\n            <div class=\"container psln-navSearch\"> \n                    <div class=\"form-group\"> \n                        <div class=\"col-md-psln\">\n                            <select id=\"Species\" name=\"Species\" class=\"form-control\" [(ngModel)]=\"filterBar.PetSpeciesId\">\n                                <option *ngFor=\"let specie of petSpecies\" value=\"{{specie.id}}\">{{specie.name}}</option>\n                              </select>\n                        </div>\n                        <div class=\"col-md-psln\">\n                            <select id=\"Species\" name=\"breed\" class=\"form-control\" [(ngModel)]=\"filterBar.PetBreedId\">\n                                <option *ngFor=\"let breed of petBreed\" value=\"{{breed.id}}\">{{breed.name}}</option>\n                              </select>\n                        </div>\n                        <div class=\"col-md-psln\">\n                                <input type=\"search\" id=\"gender\"  [(ngModel)]=\"filterBar.gender\" name=\"selectbasic\" class=\"form-control dropdownFPP\" placeholder=\"Gender\"> \n                        </div>\n                        <div class=\"col-md-psln\">\n                                <input type=\"search\" id=\"age\"  [(ngModel)]=\"filterBar.ageYears\" name=\"selectbasic\" class=\"form-control dropdownFPP\" placeholder=\"Age\"> \n                        </div>\n                        <div class=\"col-md-psln\" id=\"colSearch\">\n                                <input type=\"button\" name=\"busqueda\" id=\"btnSearch\" class=\"psln-btnSearch\" placeholder=\" \">\n                        </div>\n                            \n                    </div> \n                </div>\n       <br>\n        <p class=\"lead\">Pets</p> \n        <div class=\"row\">\n            <div class=\"col-sm-3\"> \n                <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\n                  <li><a class=\"psln-navUsersText2 psln-active\" id=\"all\" (click)=\"getPets()\">All</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"adoptable\" (click)=\"getByStatus('Adoptables')\">Adoptables</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"medical\" (click)=\"getByStatus('Medical Hold')\">Medical Hold</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"sanctuary\" (click)=\"getByStatus('Sanctuary')\">Sanctuary</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"adopted\" (click)=\"getByStatus('Adopted')\">Adopted</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"transferred\" (click)=\"getByStatus('Transferred')\">Transferred</a></li> \n                  <li><a class=\"psln-navUsersText2\" id=\"euthanized\" (click)=\"getByStatus('Euthanized')\">Euthanized</a></li> \n                </ul>\n            </div> \n        </div> \n    </div>\n</div>\n<div class=\"psln-contentGeneral\"> \n<div class=\"col-sm-8\" *ngFor=\"let pet of pets | petfilter:filter | petbarfilter:filterBar\" style=\"    float: right;\">\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\n        <div class=\"row\">\n            <div class=\"profile-header-container\" style=\"padding-top: 2%;\">   \n                <div class=\"profile-header-img\">\n                   <img class=\"img-circle\" [src]=\"getImage(pet.profileImage)\"/>\n                </div>\n            </div>\n            <div class=\"col-md-9 cta-contents\">\n                <div class=\"cta-desc\">\n                    <p><a class=\"sub-text\">Name:</a>{{pet.name}}</p>\n                    <p><a class=\"sub-text\">ID:</a>{{pet.id}}</p>\n                    <p><a class=\"sub-text\">Status:</a>{{pet.status}}</p>\n                </div>\n            </div>\n            <div class=\"col-md-3 cta-button\">\n                <a   class=\"btn btn-lg btn-block btn-default psln-btnUser\" (click)=\"viewDetail(pet)\">View Profile</a>\n                <select class=\"form-control psln-btnActions\" name=\"selectbasic\" id=\"selectActionDropdown\">\n                    <option>Actions</option>\n                    <option>Transfer</option>\n                    <option>Return</option>\n                    <option>Post to Fpp</option>\n                    <option>Send to Animal Control</option>\n                </select>\n            </div>              \n         </div>\n    </div> \n</div> \n</div>\n</div>"

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
    function PetsComponent(petService, router, getImageService) {
        this.petService = petService;
        this.router = router;
        this.getImageService = getImageService;
        this.filterBar = new __WEBPACK_IMPORTED_MODULE_4__shared_pet__["a" /* Pet */]();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_get_image_service__["a" /* GetImageService */]) === "function" && _c || Object])
], PetsComponent);

var _a, _b, _c;
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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px;\n    padding-right: 9%;\n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    text-align: center;\n    font-family: latoCustom;\n}\n#psln-panel{\n    width: 75%;\n    float: right;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 48px;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 24px;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n\n.titleOn{\n    color:#662D91;\n}\n.titleTw{\n    color:#662D91;\n}\n\n.tarProfile{\n    margin: 2%;\n    margin-top: -10px;\n}\n\n.cta-button{\n    display: -webkit-inline-box;\n    margin-left: 30%;\n    margin-right: 30%;\n}\n\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/viewprofile/viewprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Dashboard</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\"> \n          <app-sidebar></app-sidebar>        \n      <div class=\"col-md-6\" id=\"psln-panel\">\n          <div class=\"panel\" id=\"psln-panelBody\">\n              <div class=\"panel-body\"> \n                  <div class=\"row tarProfile\">        \n                      <h1 class=\"titleOn\">Revolution Rescue</h1>\n                      <h4 class=\"titleTw\">Member Since 2017. Lincoln,NE</h4>\n                      <h4>About Us</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                      </p>\n                      <h4>Mission</h4>\n                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard \n                      </p>\n                      <div class=\"cta-button\">\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Edit</a>\n                        <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Cancel</a>\n                    </div>  \n                  </div>                     \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n  <div class=\"container\">\n      <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n      <a class=\"display-4 psln-btnContact\">Contact Us</a>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/wait-list/wait-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Wait List</h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Dashboard / Wait List\n  </nav>\n  <div class=\"container psln-navSearch\"> \n    <div class=\"form-group\"> \n        <div class=\"col-md-3\">\n            <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n            <option value=\"1\">Option one</option>\n            <option value=\"2\">Option two</option>\n            </select>\n        </div>\n        <div class=\"col-md-3\">\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                <option value=\"1\">Option one</option>\n                <option value=\"2\">Option two</option>\n                </select>\n        </div>\n        <div class=\"col-md-3\">\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                <option value=\"1\">Option one</option>\n                <option value=\"2\">Option two</option>\n                </select>\n        </div>\n        <div class=\"col-md-3\">\n                <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                <option value=\"1\">Option one</option>\n                <option value=\"2\">Option two</option>\n                </select>\n        </div>\n            \n    </div> \n  </div>\n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    \t<div class=\"row\">                        \n              <div class=\"col-md-12\"> \n              <div class=\"table-responsive\">\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \n                     <thead>\n                      <th> </th>\n                      <th>Name</th>\n                      <th>Species</th>\n                      <th>Breed</th>\n                      <th>Date</th>\n                      <th>Manage</th> \n                     </thead>\n      <tbody>          \n      <tr>\n          <td>1</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n          \n       <tr>\n          <td>2</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>3</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n          \n       <tr>\n          <td>4</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n          \n       <tr>\n          <td>5</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">Waitlist</a></td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Notes</a></td>\n          <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n          </tr>\n          \n         \n          \n         \n          \n      </tbody>\n              \n      </table>\n                      \n                  </div>\n                  \n              </div>\n        </div>\n       \n           \n  </div>"

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
exports.push([module.i, ".navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 0px !important;\n    border: 1px solid transparent;\n  }\n  .login-wrapper {\n      height: 100%;\n  }\n  .login-wrapper > * {\n    height: 100%;\n  }\n  .login-wrapper .bg-pic {\n    position: absolute;\n    width: 100%;\n    overflow: hidden;\n  }\n  .login-wrapper .bg-pic > img {\n    height: 100%;\n    opacity: 0.6;\n  }\n  .login-wrapper .login-container {\n    width: 496px;\n    display: block;\n    position: relative;\n    float: right;\n  }\n  .login-wrapper .bg-caption {\n    width: 500px;\n  }\n  .register-container {\n    width: 550px;\n    margin: auto;\n    height: 100%;\n  }\n  /* Responsive handlers : Login\n  ------------------------------------\n  */\n  @media (max-width: 768px) {\n    .login-wrapper .login-container {\n      width: 100%;\n    }\n    .register-container {\n      width: 100%;\n      padding: 15px;\n    }\n  }\n  @media only screen and (max-width: 321px) {\n    .login-wrapper .login-container {\n      width: 100%;\n    }\n  }\n.psln-navbarTop{\n  display: none;\n}\n.lazy{\n  width: 100%;\n}\n.p-t-35{\n  font-size: 1.3em;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: rgba(19, 17, 30, 0.74);\n}\n.bLogin{\n  background-color: #462e68;\n  border-color: #67498e;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper \">\n  <!-- START Login Background Pic Wrapper-->\n  <div class=\"bg-pic\">\n    <!-- START Background Pic-->\n    <img src=\"assets/img/Login.jpg\" data-src=\"assets/img/Login.jpg\" data-src-retina=\"assets/img/Login.jpg\" alt=\"\" class=\"lazy\">\n    <!-- END Background Pic-->\n    <!-- START Background Caption-->\n    <div class=\"bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20\">\n      <h2 class=\"semi-bold text-white\">\n      Sharing is Caring FPPSASS</h2>\n<!--\t\t\t\n      <p class=\"small\">\n        Automatically analyze web content to determine topic relevancy, identify topical gaps, and find new opportunities.\n      </p>\n-->  \n    </div>\n    <!-- END Background Caption-->\n  </div>\n  <!-- END Login Background Pic Wrapper-->\n  <!-- START Login Right Container-->\n  <div class=\"login-container bg-white\" style=\"padding: 7%;\"> \n    <div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\n  \n      <img src=\"assets/img/fpp.svg\" alt=\"logo\" data-src=\"assets/img/fpp.svg\" data-src-retina=\"assets/img/fpp.svg\" width=\"78\" height=\"22\" style=\"width: 70px; height: 70px;\">\n \n      <p class=\"p-t-35\">Sign into FPPSASS</p>\n      <!-- START Login Form -->\n      <form id=\"form-login\" class=\"p-t-15\" >\n        <!-- START Form Control-->\n        <div class=\"form-group form-group-default\">\n          <label>LOGIN</label>\n          <div class=\"controls\">\n            <input  name=\"email\" type=\"email\"  tabindex=\"1\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"email\" required=\"\" autofocus=\"\" value=\"\" required>\n           </div>\n        </div>\n        <!-- END Form Control-->\n        <!-- START Form Control-->\n        <div class=\"form-group form-group-default\">\n          <label>PASSWORD</label>\n          <div class=\"controls\">\n            <input   name=\"password\" [(ngModel)]=\"password\" type=\"password\" id=\"inputPassword\" required=\"\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n          </div>\n        </div>\n        <!-- START Form Control\n        <div class=\"row\">\n          <div class=\"col-md-6 no-padding\">\n            <div class=\"checkbox \">\n              <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n              <label for=\"checkbox1\">Keep Me Signed in</label>\n            </div>\n          </div>\n          <div class=\"col-md-6 text-right\">\n            <a routerLink=\"#\" class=\"text-info small\">Help? Contact Support</a>\n          </div>\n        </div>\n        END Form Control-->\n        <a  (click)=\"submitLogin()\"  style=\"float:right\" name=\"login-submit\" id=\"login-submit\"  tabindex=\"4\" value=\"Sign In\" class=\"btn btn-primary btn-cons m-t-10 bLogin\">Sign in</a>\n      </form>\n      <!--END Login Form-->\n      <div class=\"pull-bottom sm-pull-bottom\">\n        <div class=\"m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\n          <div class=\"col-sm-3 col-md-2 no-padding\">\n            \n          </div>\n          <div class=\"col-sm-9 no-padding m-t-10\">\n            <p>\n              <small>\n             Using FPPSASS keeping pets happy is easy! \n            </small>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END Login Right Container-->\n</div>\n\n\n"

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
exports.push([module.i, "footer { background-color:#333433; min-height:200px; font-family: 'Open Sans', sans-serif; }\n.footerleft { margin-top:50px; padding:0 36px; }\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\n.footerleft p i { width:20px; color:#999;}\n.paddingtop-bottom {  margin-top:50px;}\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\n.footer-ul li { line-height:29px; font-size:12px;}\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\n.footer-ul i { margin-right:10px;}\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\n .icon-ul li { line-height:75px; width:100%; float:left;}\n .icon { float:left; margin-right:5px;}\n .copyright { min-height:90px; background-color:#242724;}\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\n .post p { font-size:12px; color:#FFF; line-height:20px;}\n .post p span { display:block; color:#8f8f8f;}\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\n .bottom_ul li { float:left; line-height:40px;}\n .bottom_ul li:after { content:\" \"; color:#FFF; margin-right:8px; margin-left:8px;}\n .bottom_ul li a { color:#FFF;  font-size:12px;}\n .psln-textFoot{color: #9d9d9d;font-size: 1.1em; line-height: 2; text-decoration: none;}\n .psln-footerBottom{width: 25px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--footer start from here-->\n  <footer *ngIf=\"!isLogin\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-6 footerleft \">\n            <div class=\"logofooter\"> </div>\n            \n          </div>\n          <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\n             \n          </div>\n          <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n     \n          </div>\n          <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n            <div class=\"fb-page\" data-routerLink=\"https://www.facebook.com/facebook\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\" style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\n              <div class=\"fb-xfbml-parse-ignore\">               \n                  <a class=\"psln-textFoot\">support@familypetproject.com</a><br>\n                  <a class=\"psln-textFoot\">+1 565-879-955</a><br>\n                  <a class=\"psln-textFoot\">Lincoln, NE</a>               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>\n    <!--footer start from here-->\n    \n    <div class=\"copyright\" *ngIf=\"!isLogin\">\n      <div class=\"container\">\n        <div class=\"col-md-6\">\n          <p>© 2014Family Pet Project. All Rights Reserved. v1.0</p>\n        </div>\n        <div class=\"col-md-6\">\n          <ul class=\"bottom_ul\">\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/facebook.svg\"></a></li>\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/instagram.svg\"></a></li>\n            <li><a routerLink=\"#\"><img class=\"psln-footerBottom\" src=\"assets/img/twitter.svg\"></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>"

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
exports.push([module.i, ".psln-navbarTop{\n    background-color: #fff;\n    border-color: #fff;\n    height: 80px;\n    z-index: 99999;\n}\n.psln-nav{\n    margin-top: 1%;\n}\n.psln-navHeader{\n    margin-top: 1%;\n}\n.psln-btn:hover{\n    color: #4E196E;\n}\n.psln-home:focus, .psln-home:hover , .psln-home:active{\n    border: 2px solid #4E196E;\n    color:#4E196E !important;\n} \n.psln-contact:focus, .psln-contact:hover , .psln-contact:active{\n    border: 2px solid #2399A6;\n    color:#2399A6 !important;\n} \n.psln-tools:focus, .psln-tools:hover , .psln-tools:active{\n    border: 2px solid #B11C1C;\n    color:#B11C1C !important;\n} \n.psln-users:focus, .psln-users:hover , .psln-users:active{\n    border: 2px solid #2121D2;\n    color:#2121D2 !important;\n} \n.psln-home{    \n    padding-right: 15%;\n    font-size: 18px;\n    color: #8f908e;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: 500;\n    display: inline-block;\n    padding: 12px 33px;\n    width: 130px;\n    margin-bottom: 0;\n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 31px;\n}\n.psln-contact{    \n    padding-right: 15%;\n    font-size: 18px;\n    color: #8f908e;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: 500;\n    display: inline-block;\n    padding: 12px 33px;\n    width: 130px;\n    margin-bottom: 0;\n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 31px;\n}\n.psln-tools{    \n    padding-right: 15%;\n    font-size: 18px;\n    color: #8f908e;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: 500;\n    display: inline-block;\n    padding: 12px 33px;\n    width: 130px;\n    margin-bottom: 0;\n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 31px;\n}\n.psln-users{ \n    padding-right: 15%;\n    font-size: 18px;\n    color: #8f908e;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: 500;\n    display: inline-block;\n    padding: 12px 33px;\n    width: 130px;\n    margin-bottom: 0;\n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 31px;\n}\n.psln-logo{\n    background-image: url('http://34.215.129.201:3000/assets/img/logoIcon.svg');background-repeat: no-repeat;background-size: cover ; \n    width: 55px;\n    height: 55px;\n}\n.psln-userInfo{  \n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border-radius: 30px;\n}\n\n.navbar-inverse .navbar-toggle {\n    border-color: #333;\n    background-color: #333;\n}\n\n\n\n@media (max-width:755px) {\n    \n    .navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n        background-color: #fff;\n        border-color: #fff;\n    } \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top psln-navbarTop\" *ngIf=\"!isLogin\">\n    <div class=\"container\">\n      <div class=\"navbar-header psln-navHeader\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand psln-logo\" routerLink=\"\"></a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse  psln-nav\">\n        <ul class=\"nav navbar-nav navbar-right\"  >\n            <li><a class=\"psln-home\" routerLink=\"/home\">Home</a></li>\n            <li><a class=\"psln-contact\" routerLink=\"/contact\">Contact</a></li>\n            <li><a class=\"psln-tools\" routerLink=\"/tools\">Tools</a></li>\n            <li><a class=\"psln-users\" routerLink=\"/user\">Users</a></li>\n            <li style=\"    top: -15px;\"><a routerLink=\"/Portal/Volunteer\"><img class=\"psln-userInfo\" src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\"></a></li> \n        </ul>\n      </div><!--/.navbar-collapse -->\n    </div>\n  </nav>"

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
exports.push([module.i, "\n/* Profile container */\n.profile {\n    margin: 14% 3%;\n    position: absolute;\n    top: 0%;\n    z-index: 999;\n  }\n  \n  /* Profile sidebar */\n  .profile-sidebar {\n    padding: 6px 0 0 0;\n    background: #159DA7;\n    border-radius: 122px 122px 15px 15px;\n    border: 5px solid white;\n  }\n  \n  .profile-userpic img {\n    float: none;\n    margin: 0 auto;\n    width: 80%;\n    height: 80%;\n    border-radius: 50% !important;\n    border: 4px solid white;\n    margin-top: 5%;\n  }\n  \n  .profile-usertitle {\n    text-align: center;\n    margin-top: 15px;\n    border-bottom: 2px solid rgba(214, 207, 207, 0.45);\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n  \n  .profile-usertitle-name {\n    color: #1c9ca5;\n    font-size: 12px;\n    margin-bottom: 7px;\n    background-color: #fff;\n    border-radius: 22px;\n    padding: 10px;\n    margin-left: 20%;\n    margin-right: 20%;\n    cursor: pointer;\n  }\n  \n  .profile-back {\n    color: #fff;\n    font-size: 16px;\n    margin-bottom: 7px;\n    background-color: #662D91;\n    border-radius: 22px;\n    padding: 10px;\n    margin-left: 20%;\n    margin-right: 20%;\n    cursor: pointer;\n  }\n\n  .profile-usertitle-job {\n    text-transform: uppercase;\n    color: #5b9bd1;\n    font-size: 12px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n  \n  .profile-userbuttons {\n    text-align: center;\n    margin-top: 10px;\n  }\n  \n  .profile-userbuttons .btn {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 600;\n    padding: 6px 15px;\n    margin-right: 5px;\n  }\n  \n  .profile-userbuttons .btn:last-child {\n    margin-right: 0px;\n  }\n      \n  .profile-usermenu { \n  }\n   \n  \n  .profile-usermenu ul li:last-child {\n    border-bottom: none;\n  }\n  \n  .profile-usermenu ul li a {\n    color: #fff;\n    font-size: 17px;\n    font-weight: 400;\n    padding-left: 17%;\n  }\n  \n  .profile-usermenu ul li a i {\n    margin-right: 8px;\n    font-size: 14px;\n  }\n  \n  .profile-usermenu ul li a:hover { \n    background-color:#1c9ca5;\n  }\n  \n  .profile-usermenu ul li.active {\n    border-bottom: none;\n  }\n  \n  .profile-usermenu ul li.active a {\n    color: #5b9bd1;\n    background-color: #f6f9fb;\n    border-left: 2px solid #5b9bd1;\n    margin-left: -2px;\n  }\n  \n  /* Profile Content */\n  .profile-content {\n    padding: 20px;\n    background: #fff;\n    min-height: 460px;\n  }\n\n  \ninput[type=checkbox] {\n  visibility: hidden;\n}\n\n.iconToggle{\n  display: none;\n}\n/* SLIDE THREE */\n.slideThree {\n  width: 130px;\n  height: 33px;\n  background: #006C74;\n  margin: 20px auto;\n  border-radius: 70px;\n  position: relative;\n  box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);\n}\n\n.slideThree:after {\n  content: ' ';\n  font: 15px/30px Arial, sans-serif;\n  color: #fff;\n  position: absolute;\n  right: 42px;\n  z-index: 0;\n  font-weight: bold; \n}\n\n.slideThree:before {\n  content: '';\n  font: 15px/30px Arial, sans-serif;\n  color: #fff;\n  position: absolute;\n  left: 40px;\n  z-index: 0;\n  font-weight: bold;\n}\n\n.slideThree label {\n  display: block;\n  width: 33px;\n  height: 33px;\n  border-radius: 50px;\n  transition: all .4s ease;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  left: -1px;\n  z-index: 1;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);\n  background: #fcfff4;\n\n}\n\n.slideThree input[type=checkbox]:checked + label {\n\tleft: 105px;\n}\n\n@media (max-width:992px) { \n  .profile{\n    display: none;\n  }\n  .iconToggle{\n    display: inline-block;\n    float: left;\n    position: fixed;\n    z-index: 999999999;\n    left: 0;\n    background-color: #fff;\n    padding: 10px;\n  }\n  \n  #rowProfile{\n    z-index: 99999999;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row profile\" id=\"rowProfile\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"profile-sidebar\">\n\t\t\t\t<!-- SIDEBAR USERPIC -->\n\t\t\t\t<div class=\"profile-userpic\">\n\t\t\t\t\t<img src=\"http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png\" class=\"img-responsive\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<!-- END SIDEBAR USERPIC -->\n\t\t\t\t<!-- SIDEBAR USER TITLE -->\n\t\t\t\t<div class=\"profile-usertitle\">\n\t\t\t\t\t<div class=\"{{cssOpt}}\">\n\t\t\t\t\t\t<a style=\"text-decoration: none\" id=\"textOpt\" routerLink=\"{{urlOpt}}\">View Profile</a>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t\t<!-- END SIDEBAR USER TITLE -->\n\t\t\t\t<!-- SIDEBAR BUTTONS -->\n\t\t\t\t<div class=\"profile-userbuttons\">\n\t\t\t\t\t<div class=\"slideThree\" id=\"slideL\">\t\n\t\t\t\t\t\t<input type=\"checkbox\" value=\"None\" id=\"slideThree\" name=\"check\" (change)=\"changeCheck($event)\" />\n\t\t\t\t\t\t<label for=\"slideThree\" id=\"slideT\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- END SIDEBAR BUTTONS -->\n\t\t\t\t<!-- SIDEBAR MENU -->\n\t\t\t\t<div class=\"profile-usermenu\">\n\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Intake   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Adopted   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Transfered   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Medical Hold   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Sanctuary   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a>Euthanized   :90 </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- END MENU -->\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n\t<div class=\"iconToggle\">\n\t\t<a style=\"text-decoration:none\"  (click)=\"displayProfile()\">{{option}} </a>\n\t</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-history/portal-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Volunteer History </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / Volunteer History\n</nav>\n\n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    <div class=\"row\">                        \n            <div class=\"col-md-12\"> \n            <div class=\"table-responsive\">\n                  <table id=\"mytable\" class=\"table table-bordred  \">                         \n                   <thead>\n                    <th> </th>\n                    <th>Name</th>\n                    <th>Species</th>\n                    <th>Breed</th>\n                    <th>Date</th>\n                    <th>Manage</th> \n                   </thead>\n    <tbody>          \n    <tr>\n        <td>1</td>\n        <td>Mohsin</td>\n        <td>Irshad</td>\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n        <td>isometric.mohsin@gmail.com</td> \n    </tr>\n        \n     <tr>\n        <td>2</td>\n        <td>Mohsin</td>\n        <td>Irshad</td>\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n        <td>isometric.mohsin@gmail.com</td> \n        </tr>\n        \n        \n     <tr>\n        <td>3</td>\n        <td>Mohsin</td>\n        <td>Irshad</td>\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n        <td>isometric.mohsin@gmail.com</td> \n        </tr>\n        \n        \n        \n     <tr>\n        <td>4</td>\n        <td>Mohsin</td>\n        <td>Irshad</td>\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n        <td>isometric.mohsin@gmail.com</td> \n        </tr>\n        \n        \n     <tr>\n        <td>5</td>\n        <td>Mohsin</td>\n        <td>Irshad</td>\n        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n        <td>isometric.mohsin@gmail.com</td> \n        </tr>\n        \n       \n        \n       \n        \n    </tbody>\n            \n    </table>\n                    \n                </div>\n                \n            </div>\n      </div>\n     \n         \n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    color: #fff;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\n    background-color: #583A98;\n    background-size: 25px;\n    background-position: left;\n    background-position-x: 10px;\n    width: 103px;\n    padding-left: 13%;\n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%\n}\n.lead{\n    color: #583A98;\n}\n.psln-option{\n    height: 44px;\n    border-radius: 21px;\n    border: none;\n}\n.psln-rightNav{\n    float: right;\n}\n.psln-twoCol{ \n    margin-top:8%;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-hours/portal-hours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Hours Worked   </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / Hours Worked\n</nav>\n\n<div class=\"container\">\n  <br>   \n</div> \n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \n  <div class=\"col-md-12\">  \n      <div class=\"psln-rightNav\">\n          <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">Hous worked this Month</a> \n      </div>\n      <div class=\"row\">                        \n          <div class=\"col-md-12\"> \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n           <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>               \n          </div>\n    </div>\n  </div>     \n         \n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-history/portal-my-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Volunteer History   </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / Volunteer History\n</nav> <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    <div class=\"row\">                        \n          <div class=\"col-md-12\"> \n          <div class=\"table-responsive\">\n                <table id=\"mytable\" class=\"table table-bordred  \">                         \n                 <thead>\n                  <th> </th>\n                  <th>Name</th>\n                  <th>Species</th>\n                  <th>Breed</th>\n                  <th>Date</th>\n                  <th>Manage</th> \n                 </thead>\n  <tbody>          \n  <tr>\n      <td>1</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n  </tr>\n      \n   <tr>\n      <td>2</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n   <tr>\n      <td>3</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n      \n   <tr>\n      <td>4</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n   <tr>\n      <td>5</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n     \n      \n     \n      \n  </tbody>\n          \n  </table>\n                  \n              </div>\n              \n          </div>\n    </div>\n   \n       \n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-messages/portal-my-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">My Messages    </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / My Messages\n</nav>\n<div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    <div class=\"row\">                        \n          <div class=\"col-md-12\"> \n          <div class=\"table-responsive\">\n                <table id=\"mytable\" class=\"table table-bordred  \">                         \n                 <thead>\n                  <th> </th>\n                  <th>Name</th>\n                  <th>Species</th>\n                  <th>Breed</th>\n                  <th>Date</th>\n                  <th>Manage</th> \n                 </thead>\n  <tbody>          \n  <tr>\n      <td>1</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n  </tr>\n      \n   <tr>\n      <td>2</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n   <tr>\n      <td>3</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n      \n   <tr>\n      <td>4</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n      \n   <tr>\n      <td>5</td>\n      <td>Mohsin</td>\n      <td>Irshad</td>\n      <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n      <td>isometric.mohsin@gmail.com</td>\n      <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\">View</a></td> \n      <td> <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Delete</a></td>\n      </tr>\n      \n     \n      \n     \n      \n  </tbody>\n          \n  </table>\n                  \n              </div>\n              \n          </div>\n    </div>\n   \n       \n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-organizations/portal-my-organizations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">My Organizations    </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / My Organizations\n</nav>\n<div class=\"container\">\n<div class=\"col-sm-12\">\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\n        <div class=\"row\">\n            <div class=\"profile-header-container\" style=\"padding-top: 15%;\">   \n                <div class=\"profile-header-img\">\n                   <img class=\"img-circle\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\n                </div>\n            </div>\n            <div class=\"col-md-9 cta-contents\">\n                <div class=\"cta-desc\">\n                    <p>Describe the action here.</p>\n                    <p>Describe the action here.</p>\n                    <p>Describe the action here.</p>\n                </div>\n            </div>\n            <div class=\"col-md-3 cta-button\">\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Go for It!</a>\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Go for It!</a>\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Go for It!</a>\n            </div>              \n         </div>\n    </div> \n</div>\n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-my-volunteer/portal-my-volunteer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Oportunities   </h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / Volunteer Oportunities\n</nav>\n<div class=\"container\">\n<div class=\"col-sm-12\">\n    <div class=\"bs-calltoaction bs-calltoaction-default\">\n        <div class=\"row\">\n            <div class=\"profile-header-container\" style=\"padding-top: 15%;\">   \n                <div class=\"profile-header-img\">\n                   <img class=\"img-circle\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\n                </div>\n            </div>\n            <div class=\"col-md-9 cta-contents\">\n                <div class=\"cta-desc\">\n                    <p>Describe the action here.</p>\n                    <p>Describe the action here.</p>\n                    <p>Describe the action here.</p>\n                </div>\n            </div>\n            <div class=\"col-md-3 cta-button\">\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Go for It!</a>\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-notes\">Go for It!</a>\n                <a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Go for It!</a>\n            </div>              \n         </div>\n    </div> \n</div>\n</div>"

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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n    margin-top:12%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px;\n    padding-right: 1%;\n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    font-family: latoCustom; \n    text-align: -webkit-center;\n    display: -webkit-box;\n    margin-right: 26%;\n}\n#psln-panel{\n    width: 100%;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 3em;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 1.8em;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n.imgCustom{\n    max-width: 66%;\n}\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n    .imgCustom{\n        max-width: 90%;\n    }\n  }\n  \n  @media (max-width:1200px) {   \n    .psln-text{ \n        margin-right: 9%;\n    }\n  }\n  @media (max-width:725px) {   \n    .psln-text{ \n        margin-right: 1%;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-opportunities/portal-opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Portal</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">       \n      <div class=\"col-md-6\" id=\"psln-panel\">\n          <div class=\"panel\" id=\"psln-panelBody\">\n              <div class=\"panel-body\"> \n                  <div class=\"row\">        \n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\n                          <a routerLink=\"/Portal/Volunteers\"><img src=\"assets/img/volunteerOportunities.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">Volunteer Oportunities</span>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter sprinkle\">\n                        <a routerLink=\"/Portal/Messages\"><img src=\"assets/img/mymessages.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">My Messages</span>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\n                        <a routerLink=\"/Portal/MyHistory\"><img src=\"assets/img/history.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">Volunteer History</span>\n                      </div>           \n                      <div class=\"psln-gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-3 filter hdpe\">\n                        <a routerLink=\"/Portal/MyOrganizations\"><img src=\"assets/img/myorgs.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">My Organizations</span>\n                      </div>    \n                  </div>                     \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n  <div class=\"container\">\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n        <a class=\"display-4 psln-btnContact\">Join the Team        </a>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n    margin-top:12%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px;\n    padding-right: 1%;\n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    font-family: latoCustom; \n    text-align: -webkit-center;\n    display: -webkit-box;\n    margin-right: 26%;\n}\n#psln-panel{\n    width: 100%;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 3em;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 1.8em;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n\n.imgCustom{\n    max-width: 66%;\n}\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n    .imgCustom{\n        max-width: 90%;\n    }\n  }\n  \n  @media (max-width:1200px) {   \n    .psln-text{ \n        margin-right: 9%;\n    }\n  }\n  @media (max-width:725px) {   \n    .psln-text{ \n        margin-right: 1%;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/volunteer-portal/volunteer-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Volunteer Portal</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">       \n      <div class=\"col-md-6\" id=\"psln-panel\">\n          <div class=\"panel\" id=\"psln-panelBody\">\n              <div class=\"panel-body\"> \n                  <div class=\"row\">        \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                          <a routerLink=\"/Portal/Opportunities\"><img src=\"assets/img/volunteer_opportunities.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">Volunteer Oportunities</span>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\n                        <a routerLink=\"/Portal/History\"><img src=\"assets/img/volunteerhistory.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">Voluteer History</span>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                        <a routerLink=\"/Portal/Hours\"><img src=\"assets/img/volunteerHours.svg\" class=\"img-responsive imgCustom\"></a>\n                          <span class=\"psln-text\">Volunteer Hours</span>\n                      </div>   \n                  </div>                     \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n  <div class=\"container\">\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n        <a class=\"display-4 psln-btnContact\">Join the Team        </a>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, ".btn-register {\n\tbackground-color: #1CB94E;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 14px;\n\theight: auto;\n\tfont-weight: normal;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n\tcolor: #fff;\n\tbackground-color: #1CA347;\n\tborder-color: #1CA347;\n}\n.panel-login {\n\tborder-color: #ccc;\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n\tcolor: #00415d;\n\tbackground-color: #fff;\n\tborder-color: #fff;\n\ttext-align:center;\n}\n.panel-login>.panel-heading a{\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\ttransition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n\tcolor: #029f5b;\n\tfont-size: 18px;\n}\n.panel-login>.panel-heading hr{\n\tmargin-top: 10px;\n\tmargin-bottom: 0px;\n\tclear: both;\n\tborder: 0;\n\theight: 1px;\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n\theight: 45px;\n\tborder: 1px solid #ddd;\n\tfont-size: 16px;\n\ttransition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n\toutline:none;\n\tbox-shadow: none;\n\tborder-color: #ccc;\n}\n.btn-login {\n\tbackground-color: #59B2E0;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 14px;\n\theight: auto;\n\tfont-weight: normal;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n\tcolor: #fff;\n\tbackground-color: #53A3CD;\n\tborder-color: #53A3CD;\n}\n.forgot-password {\n\ttext-decoration: underline;\n\tcolor: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n\ttext-decoration: underline;\n\tcolor: #666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"panel panel-login\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <a id=\"register-form-link\">Register</a>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <form id=\"register-form\"  >\n              <div class=\"form-group\">\n              <!-->  <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"user.name\" tabindex=\"1\" class=\"form-control\" placeholder=\"Your name\" value=\"\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" [(ngModel)]=\"user.noHashedpassword\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n              </div>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6 col-sm-offset-3\">\n                    <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" (click)=\"register(user)\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                  </div>\n                </div>-->\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>    \n"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #c2cdcd;\n    color: #fff; \n    width: 200px;\n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 60%\n}\n.lead{\n    color: #583A98;\n}\n.psln-text{\n    color:#fff;\n    font-size: 1.2em;\n}\n.psln-option{\n    height: 44px;\n    border-radius: 21px;\n    border: none;\n}\n.psln-navSearch{\n    background-color: #583A98;\n    margin-top: 1%;\n    height: 66px;\n    padding-top: 1%;\n    border-radius: 8px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/regional-breed-tracker/regional-breed-tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Regional Breed Tracker </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Tools / Regional Breed Tracker  \n  </nav>\n   \n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n \n       <h2>About</h2>\n      <p>\n          Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n          Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.\n      <p>\n          <div class=\"container psln-navSearch\"> \n              <div class=\"form-group\">  \n                  <label class=\"col-md-3 control-label psln-text\"  for=\"selectbasic\">Select Breed</label>\n                  <div class=\"col-md-4\">\n                          <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n                          <option value=\"1\">Option one</option>\n                          <option value=\"2\">Option two</option>\n                          </select>\n                  </div>\n                  <div class=\"col-md-5\">\n                          <a class=\"btn btn-lg   btn-default psln-waitlist\" routerLink=\"/trackerResult\">Search</a>\n                  </div>\n                      \n              </div> \n            </div>        \n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    color: #fff; \n    padding-left: 15%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat;\n    background-color: #009CA7;\n    background-size: 25px;\n    background-position: left; \n    width: 140px;   \n    background-position-x: 10px;\n    margin-bottom:5%;\n    margin-top: 5%;\n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\n    background-color: #fff;\n    background-size: 25px;\n    background-position: right;    \n    background-position-x: 260px;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%\n}\n.lead{\n    color: #583A98;\n}\n.psln-option{\n    height: 44px;\n    border-radius: 21px;\n    border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/rescue-network/rescue-network.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Rescue Network </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Tools / Rescue Network\n  </nav>\n  \n<div class=\"container\">\n    <br>\n   \n    <div class=\"col-md-3\">\n            <p class=\"lead\">Minnesota Rescues</p>         \n    </div>      \n    <div class=\"col-md-3\">\n            <select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control psln-option\">\n            <option value=\"1\">Option one</option>\n            <option value=\"2\">Option two</option>\n            </select>\n    </div>  \n    <div class=\"col-md-3\">\n            <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" placeholder=\"Search by Pet´s Name, ID,Microchip ID...\"> \n    </div>  \n</div> \n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n\n    \t<div class=\"row\">                        \n              <div class=\"col-md-12\"> \n              <div class=\"table-responsive\">\n                    <table id=\"mytable\" class=\"table table-bordred  \">                         \n                     <thead>\n                      <th> </th>\n                      <th>Name</th>\n                      <th>Species</th>\n                      <th>Breed</th>\n                      <th>Date</th>\n                      <th>Manage</th> \n                     </thead>\n      <tbody>          \n      <tr>\n          <td>1</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a> </td>\n      </tr>\n          \n       <tr>\n          <td>2</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\n          </tr>\n          \n          \n       <tr>\n          <td>3</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\n          </tr>\n          \n          \n          \n       <tr>\n          <td>4</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a>  </td>\n          </tr>\n          \n          \n       <tr>\n          <td>5</td>\n          <td>Mohsin</td>\n          <td>Irshad</td>\n          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>\n          <td>isometric.mohsin@gmail.com</td>\n          <td><a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-waitlist\" routerLink=\"/ResumeMessage\">Message</a> </td>\n          </tr>\n          \n         \n          \n         \n          \n      </tbody>\n              \n      </table>\n                      \n                  </div>\n                  \n              </div>\n        </div>\n       \n           \n  </div>"

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
exports.push([module.i, ".psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.psln-containerBottom{\n    background-image: url('http://34.215.129.201:3000/assets/img/bannerBottom.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 175px;\n    padding-bottom: 170px;\n    margin-bottom: 0%;\n    margin-top:12%;\n}\n.psln-gallery_product\n{\n    margin-bottom: 30px;\n    padding-right: 1%;\n}\n.psln-text{\n    font-size: 20px;\n    color: #8f908e; \n    font-family: latoCustom; \n    text-align: -webkit-center;\n    display: -webkit-box;\n    margin-right: 26%;\n}\n#psln-panel{\n    width: 75%;\n    float: right;\n}\n#psln-panelBody{\n    border-radius: 15px;\n    z-index: 99999;\n    position: relative;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-textBot{\n    color: #fff;\n    text-align: center;\n    font-size: 3em;\n}\n\n.psln-btnContact{ \n    position: relative; \n    margin-left: 40%;\n    top: 90px;\n    font-size: 1.8em;\n    color: #fff;\n    font-family: inherit;\n    text-align: center;\n    font-weight: 500;\n    padding: 12px 33px;\n    width: 205px; \n    text-decoration: none;\n    line-height: 1.42857143;\n    white-space: nowrap;\n    cursor: pointer;\n    border-radius: 9px;\n    border: 3px solid;\n}\n.imgCustom{\n    max-width: 66%;\n}\n@media (max-width:992px) { \n    #psln-panel  {\n        width: 100%;\n        float: right;\n    }\n    .imgCustom{\n        max-width: 90%;\n    }\n  }\n  \n  @media (max-width:1200px) {   \n    .psln-text{ \n        margin-right: 9%;\n    }\n  }\n  @media (max-width:725px) {   \n    .psln-text{ \n        margin-right: 1%;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Tools</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\"> \n          <app-sidebar></app-sidebar>        \n      <div class=\"col-md-6\" id=\"psln-panel\">\n          <div class=\"panel\" id=\"psln-panelBody\">\n              <div class=\"panel-body\"> \n                  <div class=\"row\">        \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                          <a routerLink=\"/rescueNetwork\"><img src=\"assets/img/recueNetwork.svg\" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">Rescue Network</p>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter sprinkle\">\n                        <a routerLink=\"/RegionalBreed\"><img src=\"assets/img/regionalBreedTracker.svg\" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">Regional Breed Tracker</p>\n                      </div>            \n                      <div class=\"psln-gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-4 filter hdpe\">\n                        <a routerLink=\"/transport\"><img src=\"assets/img/transport.svg\" class=\"img-responsive imgCustom\"></a>\n                          <p class=\"psln-text\">transport</p>\n                      </div>   \n                  </div>                     \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron psln-containerBottom\">\n  <div class=\"container\">\n        <p class=\"display-4 psln-textBot\">Lorem Ipsum is simply dummy text of the printing.</p>\n        <a class=\"display-4 psln-btnContact\">Contact Us</a>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0; \n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    color: #fff;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/back.svg") + ") no-repeat;\n    background-color: #583A98;\n    background-size: 25px;\n    background-position: left;\n    background-position-x: 10px;\n    width: 103px;\n    padding-left: 13%;\n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n} \n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 90%\n}\n.lead{\n    color: #583A98;\n}\n.psln-option{\n    height: 44px;\n    border-radius: 21px;\n    border: none;\n}\n.psln-rightNav{\n    float: right;\n}\n.psln-twoCol{ \n    margin-top:8%;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tracker-result/tracker-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n      <h1 class=\"display-4 psln-oracleText\">Regional Breed Tracker </h1>\n    </div>\n  </div>\n  <nav class=\"psln-navUsers\">\n  Tools / Regional Breed Tracker\n  </nav>\n  \n<div class=\"container\">\n    <br>  \n    <div class=\"col-md-3\">\n        <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-notes\">Back</a> \n    </div>  \n</div> \n  <div class=\"container bs-calltoaction bs-calltoaction-default\"> \n    <div class=\"col-md-12\">\n        <div class=\"lead\" style=\"float:left;\">Dalmation</div> \n        <div class=\"psln-rightNav\">\n            <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">By Adoption Popularity</a> \n        </div>\n        <div class=\"row\">                        \n            <div class=\"col-md-12\"> \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p> \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>   \n             <p>1.    05/07/2017 <span style=\"float:right\">100</span> <p>               \n            </div>\n      </div>\n    </div>     \n           \n  </div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 100%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.control-label{\n    color: #583A98;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.psln-threeCol{\n    -webkit-column-count: 3;\n            column-count: 3;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 300px;\n    height: 280px;\n    border-radius: 30px;\n}\n.psln-btnSave{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #009CA7;\n    color: #fff;\n}\n.psln-btnCancel{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #a7a7b5;\n    color: #fff;\n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n.psln-btnFoot{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #662D91;\n    color: #fff;\n}\n.psln-userInfo{    \n    background: url(" + __webpack_require__("../../../../../src/assets/img/post.svg") + ") no-repeat; \n    background-color:#009CA7;\n    background-size: 25px;\n    background-position: left; \n    width: 220px;   \n    background-position-x: 10px;\n    margin-bottom:5%;\n    margin-top: 5%;\n    color:#fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">Transport</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nTools / Transport\n</nav>\n<div class=\"container\">\n<div class=\"col-sm-12 bs-calltoaction bs-calltoaction-default\">\n      <form class=\"form-horizontal\">\n              <fieldset> \n              <!-- Text input-->\n              <br>\n              <div class=\"col-md-12\">\n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"Brand\">Send Request to</label>  \n                <div class=\"col-md-8\">\n                <input id=\"Brand\" name=\"Brand\" type=\"text\" placeholder=\"Brand\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n              \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"much\">To Transport</label>  \n                <div class=\"col-md-8\">\n                <input id=\"much\" name=\"much\" type=\"text\" placeholder=\"How Much\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n              \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"often\">On this Date</label>  \n                <div class=\"col-md-8\">\n                <input id=\"often\" name=\"often\" type=\"text\" placeholder=\"How Often\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n              \n              <!-- Textarea -->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"Instructions\">From This Address</label>\n                <div class=\"col-md-8\">                     \n                  <textarea class=\"form-control\" id=\"Instructions\" name=\"Instructions\"> Description....</textarea>\n                </div>\n              </div>\n              \n              <!-- Button (Double) -->\n              <div class=\"form-group\"> \n                <div class=\"col-md-12\" align=\"center\">\n                  <a id=\"button1id\" name=\"button1id\" class=\"btn btn-lg  btn-default psln-userInfo\">Submit Request</a> \n                </div>\n              </div>\n              </div>\n              </fieldset>\n              </form>\n              \n</div> \n</div>"

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
exports.push([module.i, ".textLoad{\n    position: absolute;\n    margin-top: -80px;\n    width: 100%;\n    left: 0;\n    font-weight: 100;\n}\n.none{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\" >\n      <a href=\"javascript:void(0)\" (click)=\"file.click()\" > \n        <br>\n        <br>\n       <b ngClass=\"{{textImage}}\"  style=\"color:#000;\"> Select images to upload </b>\n      </a><br>\n      <span ngClass=\"{{display}}\" style=\"font-size: 16px;color: #000;\">Or Drag & Drop to images files</span>\n      <br>\n      <br>\n\n        <input type=\"file\" \n              #file \n              [multiple]=\"(maxFiles > 1)\"\n              (change) = \"onFileChange($event)\"\n              style=\"display:none\" />\n    </div>\n  </div>\n\n</div>\n<div class=\"row error\" *ngIf=\"errors.length > 0\">    \n  <ul>\n    <li *ngFor=\"let err of errors\">{{err}}</li>\n  </ul>\n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 100%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.control-label{\n    color: #583A98;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.psln-threeCol{\n    -webkit-column-count: 3;\n            column-count: 3;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 300px;\n    height: 280px;\n    border-radius: 30px;\n}\n.psln-btnSave{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #009CA7;\n    color: #fff;\n}\n.psln-btnCancel{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #a7a7b5;\n    color: #fff;\n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n.psln-btnFoot{\n    border-radius: 25px;\n    width: 150px;\n    margin-left: 5%;\n    background-color: #662D91;\n    color: #fff;\n}\n/* Upload Image */\n\n.dragarea{\n    height: 280px;\n    border: 1px solid;\n    padding: 16%;\n    margin-top: 2%;\n    margin-left: 24%;\n    background-image:url('http://34.215.129.201:3000/assets/img/userimage.jpg');\n    width: 100%;\n}\n.textLoad{\n    position: absolute; \n    width: 100%;\n    left: 0;\n}\n.none{\n    display: none;\n}\n.leftDiv{\n    margin-left: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">New User</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\nDashboard / New User\n</nav>\n<div class=\"container\">\n\n<div class=\"col-md-12 bs-calltoaction bs-calltoaction-default\">\n        <div class=\"col-md-3\">\n            <div class=\"dragarea\" id=\"preImage\">\n            <app-file-upload\n            projectId=\"100\" \n            sectionId=\"101\" \n            maxFiles=\"1\"\n            maxSize=\"2\"\n            fileExt=\"JPG, GIF, PNG\"\n            (uploadStatus)=\"refreshImages($event)\"\n            (change)=\"readUrl($event)\" >\n          </app-file-upload>\n        </div>\n        </div>\n      <form class=\"leftDiv form-horizontal col-md-8\">\n\n              <fieldset> \n                \n              <!-- Text input--> \n              <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\" for=\"name\">Username*</label>  \n                  <div class=\"col-md-10\">\n                  <input id=\"username\" name=\"username\" type=\"text\" [(ngModel)]=\"user.username\" placeholder=\"User Name\" class=\"form-control input-md\"  >\n                    \n                  </div>\n              </div>\n                <!-- Text input--> \n              <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\" for=\"name\">Password*</label>  \n                  <div class=\"col-md-10\">\n                  <input id=\"pass\" name=\"pass\" type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control input-md\">\n                    \n                  </div>\n              </div>\n              <!-- Text input--> \n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"name\">Firstname*</label>  \n                <div class=\"col-md-10\">\n                <input id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"user.firstname\" placeholder=\"First Name\" class=\"form-control input-md\">\n                  \n                </div>\n              </div>\n\n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"middle\"> Middle Name</label>  \n                <div class=\"col-md-10\">\n                <input id=\"middle\" name=\"middle\" type=\"text\" [(ngModel)]=\"user.middlename\" placeholder=\"Middle Name\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n\n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"last\">Lastname*</label>  \n                <div class=\"col-md-10\">\n                <input id=\"last\" name=\"last\" type=\"text\"  [(ngModel)]=\"user.lastname\" placeholder=\"Last Name\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n              \n              <!-- Select input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"birth\">Birth Date*</label>\n                <div class=\"col-md-10\"> \n                  <input id=\"birth\" name=\"birth\" type=\"date\" [(ngModel)]=\"user.birthdate\" placeholder=\"Birth Date\" class=\"form-control input-md\">\n\n                </div>\n              </div>\n              <!-- Select input-->\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\" for=\"email\">Email*</label>\n                  <div class=\"col-md-10\">\n                      <input id=\"email\" name=\"email\" type=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control input-md\">    \n                  </div>\n              </div>                 \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"phone\">Phone*</label>  \n                <div class=\"col-md-10\">\n                <input id=\"phone\" name=\"phone\" type=\"number\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" class=\"form-control input-md\">\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n              \n              <!-- Text input-->\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\" for=\"type\">Type*</label>  \n                <div class=\"col-md-10\">\n                    <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"user.type\">\n                        <option  value=\"volunteer\">volunteer</option>\n                        <option  value=\"employees\">employee</option>\n                        <option  value=\"user\">user</option>\n                    </select>\n                <span class=\"help-block\"> </span>  \n                </div>\n              </div>\n        \n              </fieldset>\n              </form>\n              \n              <!-- Button (Double) -->\n              <div class=\"form-group\"> \n                  <div class=\"col-md-12\" align=\"center\">\n                    <a id=\"button1id\" name=\"button1id\" (click)=\"createPJ(user)\" class=\"btn btn-lg  btn-default psln-btnSave\">Save</a>\n                    <a id=\"button2id\" name=\"button2id\" routerLink=\"/user\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\n                  </div>\n                </div> \n              \n</div> \n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n\n}\n\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-active{\n    background-color: rgba(196, 245, 255, 0.47)  !important;\n    color: #583A98 !important; \n    cursor: pointer;\n}\n.psln-navUsersText:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2:hover{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n    cursor: pointer;\n}\n.psln-btnUser{\n    border-radius: 30px;\n}\n.psln-waitlist{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff; \n}\n.psln-notes{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff; \n}\n.psln-delete{\n    border-radius: 30px;\n    background-color: #DC4468;\n    color: #fff; \n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #583A98;\n    color: #fff;  \n    margin-left: 10%;     \n    width: 200px;\n    margin-top: -10px;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%; \n    background: url(" + __webpack_require__("../../../../../src/assets/img/BROWSE.svg") + ") no-repeat;\n    background-color: #fff;\n    background-size: 25px;\n    background-position: right;\n    background-position-x: 260px;\n}\n.sub-text{\n    color: #583A98;\n    text-decoration: none;\n    padding-right: 4%;\n    font-size: 17px;\n} \n.img-circle{\n    width: 150px;\n    height: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n    <div class=\"container\">\n        <h1 class=\"display-4 psln-oracleText\">Manage Users</h1>\n    </div>\n</div>\n<nav class=\"psln-navUsers\">\n    Dashboard / Manage Users\n</nav>\n<div class=\"container\">\n    <div class=\"col-sm-4\">\n        <div class=\"container\">\n            <br>\n           <!-- <p class=\"lead\">Users Types</p>-->\n            <div class=\"addPet\">\n                <form>\n                    <input type=\"search\" name=\"busqueda\" class=\"psln-btnPlace\" [(ngModel)]=\"filter\" placeholder=\"Search by   Name, ID...\">\n                </form>\n                <a routerLink=\"/newuser\" class=\"btn btn-lg btn-block btn-default psln-btnNewPet\">Add New\n                    <img class=\"psln-imgAsset\" src=\"assets/img/ADD.svg\" width=\"35\">\n                </a>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                   <!-- <ul id=\"nav-tabs-wrapper\" class=\"nav  nav-pills nav-stacked\">\n                        <li>\n                            <a id=\"admins\" (click)=\"getType('Admins')\" class=\"psln-navUsersText2 psln-active\">Admins</a>\n                        </li>\n                        <li>\n                            <a id=\"manager\" (click)=\"getType('Managers')\" class=\"psln-navUsersText2\">Managers</a>\n                        </li>\n                    </ul>-->\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-8\" style=\"margin-top:11%;\">\n        <div class=\"bs-calltoaction bs-calltoaction-default\" *ngFor=\"let user of listUser |userfilter:filter\">\n            <div class=\"row\">\n                <div class=\"profile-header-container\" style=\"padding-top: 15%;\">\n                    <div class=\"profile-header-img\">\n                        <img class=\"img-circle\" [src]=\"getImage(user.AppUser.profileImage)\" />\n                    </div>\n                </div>\n                <div class=\"col-md-9 cta-contents\">\n                    <div class=\"cta-desc\">\n                        <p>\n                            <a class=\"sub-text\">Name:</a>{{user.AppUser.firstname}} {{user.AppUser.lastname}}</p>\n                        <p>\n                            <a class=\"sub-text\">ID:</a>{{user.AppUser.id}}</p>\n                        <p>\n                            <a class=\"sub-text\">Status:</a>{{user.AppUser.active}}</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 cta-button\">\n                    <a (click)=\"viewDetail(user.AppUser)\" class=\"btn btn-lg btn-block btn-default  psln-waitlist\">Edit</a>\n                    <a (click)=\"deleteUser(user.AppUser)\"  class=\"btn btn-lg btn-block btn-default psln-notes\">Delete</a>\n                    <!--<a routerLink=\"#\" class=\"btn btn-lg btn-block btn-default psln-delete\">Misk</a>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
exports.push([module.i, ".bs-calltoaction{\n    position: relative;\n    width:auto;\n    padding: 15px 25px;\n    border: 1px solid black;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n\n    .bs-calltoaction > .row{\n        display:table;\n        width: calc(100% + 30px);\n    }\n     \n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:table-cell;\n            vertical-align:middle;\n        }\n\n            .cta-contents{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n                .cta-title{\n                    margin: 0 auto 15px;\n                    padding: 0;\n                }\n\n                .cta-desc{\n                    padding: 0;\n                    border-left: 1px solid #cbcaca;\n                    padding-left: 2%;\n                }\n\n                .cta-desc p:last-child{\n                    margin-bottom: 0;\n                }\n\n            .cta-button{\n                padding-top: 10px;\n                padding-bottom: 10px;\n            }\n\n@media (max-width: 991px){\n    .bs-calltoaction > .row{\n        display:block;\n        width: auto;\n    }\n\n        .bs-calltoaction > .row > [class^=\"col-\"],\n        .bs-calltoaction > .row > [class*=\" col-\"]{\n            float:none;\n            display:block;\n            vertical-align:middle;\n            position: relative;\n        }\n\n        .cta-contents{\n            text-align: center;\n        }\n}\n\n\n\n.bs-calltoaction.bs-calltoaction-default{\n    color: #333;\n    background-color: #fff;\n    border-color: #fcf8e3;\n    border-radius: 38px;\n    width: 100%;\n}\n\n.psln-container{\n    background-image: url('http://34.215.129.201:3000/assets/img/headerImage.jpg');background-repeat: no-repeat;background-size: cover ; \n    padding-top: 80px;\n    padding-bottom: 104px;\n}\n.control-label{\n    color: #583A98;\n}\n.psln-oracleText{\n    float: right;\n    margin-right: 36%;\n    color: white;\n    font-family: pacificoCustom;\n}\n.psln-navUsers{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 1%;    \n    padding-left: 7%;\n}\n.psln-navUsersText{\n    background-color: rgba(196, 245, 255, 0.47);\n    color: #583A98;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-navUsersText:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2:hover{\n    color: #fff; \n    background-color: transparent;\n}\n.psln-navUsersText2{\n    background-color: #583A98;\n    color: #fff;\n    height: 50px;\n    margin-top: -2.2%;\n    font-size: 1.1em;\n    padding: 5%;\n    border-radius:0px;\n}\n.psln-btnUser{\n    border-radius: 30px;\n    background-color: #009CA7;\n    color: #fff;\n    margin-bottom:11%;\n}\n.psln-btnActions{\n    background-color: #662D91;\n    color: #fff;\n}\n.addPet{\n    float: right;\n    display:  -webkit-box;\n    display:  -ms-flexbox;\n    display:  flex;\n    position: relative;\n    margin-right: 10%;\n}\n.psln-btnNewPet{\n    border-radius: 30px;\n    background-color: #662D91;\n    color: #fff;  \n    margin-left: 10%; \n}\n.psln-contentGeneral{\n    margin-top: 10%;\n}\n.psln-btnPlace{\n    border-radius: 25px;\n    border: 1px solid #fff; \n    height: 45px;\n    width: 300px;\n    padding-left: 4%;\n}\n.psln-threeCol{\n    -webkit-column-count: 3;\n            column-count: 3;\n}\n.psln-imgPet{\n    display: inline-block;\n    width: 300px;\n    height: 280px;\n    border-radius: 30px;\n}\n.psln-btnSave{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #009CA7;\n    color: #fff;\n}\n.psln-btnCancel{\n    border-radius: 25px;\n    width: 140px;\n    background-color: #a7a7b5;\n    color: #fff;\n}\n.psln-divFoot{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n.psln-btnFoot{\n    border-radius: 25px;\n    width: 150px;\n    margin-left: 5%;\n    background-color: #662D91;\n    color: #fff;\n}\n/* Upload Image */\n \n.dragarea{\n    height: 280px;\n    border: 1px solid;\n    padding: 16%;\n    margin-top: 2%;\n    margin-left: 24%;\n    background-image:url('http://34.215.129.201:3000/assets/img/userimage.jpg');\n    width: 100%;\n}\n\n.leftDiv{\n    margin-left: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/userdetail/userdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron psln-container\">\n  <div class=\"container\">\n    <h1 class=\"display-4 psln-oracleText\">New User</h1>\n  </div>\n</div>\n<nav class=\"psln-navUsers\">\n  Dashboard / New User\n</nav>\n<div class=\"container\">\n  <div class=\"  col-sm-12 bs-calltoaction bs-calltoaction-default\">\n    <div class=\"col-md-3\">\n      <div class=\"dragarea\" id=\"preImage\">\n        <app-file-upload projectId=\"100\" sectionId=\"101\" maxFiles=\"1\" maxSize=\"2\" fileExt=\"JPG, GIF, PNG\" (uploadStatus)=\"refreshImages($event)\"\n          (change)=\"readUrl($event)\">\n        </app-file-upload>\n      </div>\n    </div>\n    <form class=\"leftDiv form-horizontal col-md-8\">\n      <fieldset>\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"name\">Username*</label>\n          <div class=\"col-md-10\">\n            <input id=\"username\" name=\"username\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.username\" placeholder=\"User Name\"\n              class=\"form-control input-md\">\n\n          </div>\n        </div>\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"name\">Password*</label>\n          <div class=\"col-md-10\">\n            <input id=\"pass\" name=\"pass\" type=\"password\" [disabled]=\"is_edit\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control input-md\">\n\n          </div>\n        </div>\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"name\">Firstname</label>\n          <div class=\"col-md-10\">\n            <input id=\"name\" name=\"name\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.firstname\" placeholder=\"First Name\" class=\"form-control input-md\">\n\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"last\">Lastname</label>\n          <div class=\"col-md-10\">\n            <input id=\"last\" name=\"last\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.lastname\" placeholder=\"Last Name\" class=\"form-control input-md\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"middle\"> Middle Name</label>\n          <div class=\"col-md-10\">\n            <input id=\"middle\" name=\"middle\" type=\"text\" [disabled]=\"is_edit\" [(ngModel)]=\"user.middlename\" placeholder=\"Middle Name\"\n              class=\"form-control input-md\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n        <!-- Select input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"birth\">Birth Date</label>\n          <div class=\"col-md-10\">\n            <input id=\"birth\" name=\"birth\" type=\"date\" [disabled]=\"is_edit\"  [value]=\"user.birthdate | date:'yyyy-MM-dd'\" (input)=\"user.birthdate=($event.target.value)\" class=\"form-control input-md\">\n          \n          </div>\n        </div>\n        <!-- Select input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"email\">Email</label>\n          <div class=\"col-md-10\">\n            <input id=\"email\" name=\"email\" type=\"email\" [disabled]=\"is_edit\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control input-md\">\n          </div>\n        </div>\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"phone\">Phone</label>\n          <div class=\"col-md-10\">\n            <input id=\"phone\" name=\"phone\" type=\"number\" [disabled]=\"is_edit\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" class=\"form-control input-md\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\" for=\"type\">Type</label>\n          <div class=\"col-md-10\">\n            <select id=\"type\" name=\"type\" class=\"form-control\" [disabled]=\"is_edit\" [(ngModel)]=\"user.type\">\n              <option value=\"volunteer\">volunteer</option>\n              <option value=\"employees\">employee</option>\n              <option value=\"user\">user</option>\n            </select>\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Button (Double) -->\n\n      </fieldset>\n    </form>\n    <div class=\"form-group\">\n      <div class=\"col-md-12\" align=\"center\">\n        <a id=\"button1id\" name=\"button1id\" (click)=\"updateUser(user)\" class=\"btn btn-lg  btn-default psln-btnSave\">{{btnEdit}}</a>\n        <a id=\"button2id\" name=\"button2id\" routerLink=\"/user\" class=\"btn btn-lg  btn-default psln-btnCancel\">Cancel</a>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = __webpack_require__.p + "ADD.c298fd4d085445e3e379.svg";

/***/ }),

/***/ "../../../../../src/assets/img/BROWSE.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BROWSE.8158c6a2c3cb73c23ff9.svg";

/***/ }),

/***/ "../../../../../src/assets/img/back.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back.88885b47f6bf3263a71c.svg";

/***/ }),

/***/ "../../../../../src/assets/img/post.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "post.91ccdb0b004c26b62c8d.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://34.215.129.201:3003/',
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