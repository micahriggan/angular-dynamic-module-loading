import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

import { GenresView } from './genres.view';
import { GenreListingComponent } from './genre-listing.component';

export const GENRE_ROUTES: Route[] = [
    {
        path: '',
        component: GenresView,
        children: [
            {
                path: '',
                component: GenreListingComponent
            },
            {
                path: 'genre/:genreId',
                loadChildren: '../bands/bands.module#BandsModule'
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(GENRE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class GenreRoutesModule {}
