import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { ColorPickerModule} from 'ngx-color-picker';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SortablejsModule, SortablejsOptions} from "angular-sortablejs";
import { ResizableModule } from 'angular-resizable-element';
import { DirectivesModule } from '../core/widgster/directives.module';

import { CropperComponent}  from './image-cropper/image-cropper.component';
import { ColorPickerComponent}  from './color-picker/color-picker.component';
import { DragulaDemoComponent}  from './dragula/dragula.component';
import { SortableDemoComponent}  from './sortablejs/sortable.component';
import { ResizableComponent }  from './resizable/resizable.component';

import { FeaturesRoutes } from './features.routing';

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    MaterialModule,
    ResizableModule,
    DragulaModule,
    SortablejsModule,
    DirectivesModule,
    RouterModule.forChild(FeaturesRoutes)
  ],
  declarations: [ 
    CropperComponent,
    ColorPickerComponent,
    DragulaDemoComponent,
    SortableDemoComponent,
    ResizableComponent
  ]
})

export class FeaturesModule {}
