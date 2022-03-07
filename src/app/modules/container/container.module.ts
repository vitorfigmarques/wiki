import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [SharedModule, CommonModule],
  exports: [ContainerComponent],
})
export class ContainerModule {}
