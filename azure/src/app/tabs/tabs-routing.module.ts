import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // HOME
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unit-details/unit-details.module').then(m => m.UnitDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details/tenant-details/:tenantCode/:pUnitRoom',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tenant-details/tenant-details.module').then(m => m.TenantDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details/resident-details-list/:unit_code/:condition/:pUnitRoom',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resident-details-list/resident-details-list.module').then(m => m.ResidentDetailsListPageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details/resident-details-list/resident-details-individual',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resident-details-individual/resident-details-individual.module').then(m => m.ResidentDetailsIndividualPageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details/old-tenant-details/:unit_code',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../old-tenant-details/old-tenant-details.module').then(m => m.OldTenantDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/unit-details/parking-details/:property_code/:floorNo/:roomNo/:propertyBuilding',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../parking-details/parking-details.module').then(m => m.ParkingDetailsPageModule)
          }
        ]
      },
      // VISITOR MODULE
      {
        path: 'tab1/visitors-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../visitors-details/visitors-details.module').then(m => m.VisitorsDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/visitors-details/visitor-list-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../visitor-list-details/visitor-list-details.module').then(m => m.VisitorListDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/visitors-details/visitor-add-request',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../visitor-add-request/visitor-add-request.module').then(m => m.VisitorAddRequestPageModule)
          }
        ]
      },

      // NOTICES MODULE
      {
        path: 'tab1/notice-main-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notice-main-list/notice-main-list.module').then(m => m.NoticeMainListPageModule)
          }
        ]
      },
      {
        path: 'tab1/notice-main-list/notice-rules-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notice-rules-list/notice-rules-list.module').then(m => m.NoticeRulesListPageModule)
          }
        ]
      },
      {
        path: 'tab1/notice-main-list/notice-rules-list/notice-rules-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notice-rules-details/notice-rules-details.module').then(m => m.NoticeRulesDetailsPageModule)
          }
        ]
      },
      // AMENITIES MODULE
      {
        path: 'tab1/amenities-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../amenities-details/amenities-details.module').then(m => m.AmenitiesDetailsPageModule)
          }
        ]
      },
      {
        path: 'tab1/amenities-details/amenity-info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../amenity-info/amenity-info.module').then(m => m.AmenityInfoPageModule)
          }
        ]
      },
      {
        path: 'tab1/amenities-details/amenity-info/amenity-book-now',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../amenity-book-now/amenity-book-now.module').then(m => m.AmenityBookNowPageModule)
          }
        ]
      },
      {
        path: 'tab1/amenities-details/amenity-booking-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../amenity-booking-list/amenity-booking-list.module').then(m => m.AmenityBookingListPageModule)
          }
        ]
      },
      {
        path: 'tab1/amenities-details/amenity-booking-list/amenity-booking-details',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../amenity-booking-details/amenity-booking-details.module').then(m => m.AmenityBookingDetailsPageModule)
          }
        ]
      },
      // PROFILE
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      // NOTIFICATIONS
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
