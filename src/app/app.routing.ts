import { RouterModule } from '@angular/router';

import { BuilderComponent } from './builder/builder.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routing = RouterModule.forRoot([
    {path:'', component: BuilderComponent},
    {path:'cart', component: CartComponent},
    {path:'**', component: NotfoundComponent}
]);