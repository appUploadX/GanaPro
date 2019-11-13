import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'unit-details', loadChildren: './unit-details/unit-details.module#UnitDetailsPageModule' },
  { path: 'tenant-details', loadChildren: './tenant-details/tenant-details.module#TenantDetailsPageModule' },
  { path: 'resident-details-list', loadChildren: './resident-details-list/resident-details-list.module#ResidentDetailsListPageModule' },
  { path: 'resident-details-individual/:id/:pUnitCode', loadChildren: './resident-details-individual/resident-details-individual.module#ResidentDetailsIndividualPageModule' },
  { path: 'old-tenant-details', loadChildren: './old-tenant-details/old-tenant-details.module#OldTenantDetailsPageModule' },
  { path: 'parking-details', loadChildren: './parking-details/parking-details.module#ParkingDetailsPageModule' },
  { path: 'visitors-details', loadChildren: './visitors-details/visitors-details.module#VisitorsDetailsPageModule' },
  { path: 'visitor-list-details', loadChildren: './visitor-list-details/visitor-list-details.module#VisitorListDetailsPageModule' },
  { path: 'visitor-details-modal', loadChildren: './visitor-details-modal/visitor-details-modal.module#VisitorDetailsModalPageModule' },
  { path: 'visitor-add-request', loadChildren: './visitor-add-request/visitor-add-request.module#VisitorAddRequestPageModule' },
  { path: 'visitor-add-request-modal', loadChildren: './visitor-add-request-modal/visitor-add-request-modal.module#VisitorAddRequestModalPageModule' },
  { path: 'notice-main-list', loadChildren: './notice-main-list/notice-main-list.module#NoticeMainListPageModule' },
  { path: 'notice-rules-list', loadChildren: './notice-rules-list/notice-rules-list.module#NoticeRulesListPageModule' },
  { path: 'notice-rules-details', loadChildren: './notice-rules-details/notice-rules-details.module#NoticeRulesDetailsPageModule' },
  { path: 'amenities-details', loadChildren: './amenities-details/amenities-details.module#AmenitiesDetailsPageModule' },
  { path: 'amenity-info', loadChildren: './amenity-info/amenity-info.module#AmenityInfoPageModule' },
  { path: 'amenity-book-now', loadChildren: './amenity-book-now/amenity-book-now.module#AmenityBookNowPageModule' },
  { path: 'amenity-booking-list', loadChildren: './amenity-booking-list/amenity-booking-list.module#AmenityBookingListPageModule' },
  { path: 'amenity-booking-details', loadChildren: './amenity-booking-details/amenity-booking-details.module#AmenityBookingDetailsPageModule' },
  { path: 'profile-details', loadChildren: './profile-details/profile-details.module#ProfileDetailsPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
