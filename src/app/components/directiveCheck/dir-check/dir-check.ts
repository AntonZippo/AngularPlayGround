import { Component } from '@angular/core';
import { BackGroundColor } from '../../../directives/backGroundChange/back-ground-color';
import { NgStyle } from '@angular/common';
import { HideClick } from '../../../directives/clickNhide/hide-click';
import { NgIf } from '@angular/common';
import { ClkCntr } from '../../../directives/clickCounter/clk-cntr';

@Component({
  selector: 'app-dir-check',
  imports: [BackGroundColor,NgStyle,HideClick,NgIf,ClkCntr],
  templateUrl: './dir-check.html',
  styleUrl: './dir-check.scss'
})
export class DirCheck {
  isVisible = true;

  public ChangeVisibility(){
    this.isVisible = !this.isVisible
  }
  
}
