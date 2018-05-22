import { RouterModule } from '@angular/router';

import { BuilderComponent } from './builder/builder.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SelectionComponent } from './selection/selection.component';


export const routing = RouterModule.forRoot([
    {path:'cart', component: CartComponent},
    {path:'', component: SelectionComponent},
    {path:'builder/:type', component: BuilderComponent},
    {path:'**', component: NotfoundComponent}
]);