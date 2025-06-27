import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c8y-motiontip',
  templateUrl: './motiontip.template.html',
  standalone: false
})
export class MotionTipComponent implements OnInit {
  @Input() status: boolean;
  @Input() name: string;
  ngOnInit(): void {
    this.status = false;
  }
}
