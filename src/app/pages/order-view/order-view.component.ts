import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDto } from '../../shared/dtos/order.dto';
import { CustomerDto } from '../../shared/dtos/customer.dto';
import { CustomerService } from '../../shared/services/customer.service';
import { NotyService } from '../../noty/noty.service';

@Component({
  selector: 'order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  order: OrderDto;
  customer: CustomerDto;

  constructor(private orderService: OrderService,
              private customerService: CustomerService,
              private notyService: NotyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    const id  = this.route.snapshot.paramMap.get('id');
    this.orderService.fetchOrder(id)
      .subscribe(
        response => {
          this.order = response.data;
          this.fetchCustomer(this.order.customerId);
        }
      );
  }

  private fetchCustomer(customerId: number) {
    this.customerService.fetchCustomer(customerId)
      .subscribe(
        response => {
          this.customer = response.data;
        }
      );
  }

  goBack() {
    this.router.navigate(['admin', 'order']);
  }

  cancelOrder() {
    if (!confirm(`Вы уверены, что хотите отменить заказ?`)) {
      return;
    }

    this.orderService.cancelOrder(this.order.id)
      .pipe(this.notyService.attachNoty({ successText: 'Заказ успешно отменён' }))
      .subscribe(
        response => {
          this.order = response.data;
        },
        error => console.warn(error)
      );
  }

  reorder() {
    this.router.navigate(['admin', 'order', 'new', 'based-on', this.order.id]);
  }

  startOrder() {
    if (!confirm(`Вы уверены, что хотите начать заказ?`)) {
      return;
    }

    this.orderService.startOrder(this.order.id)
      .pipe(this.notyService.attachNoty({ successText: `Заказ переведён в статус 'Начат'` }))
      .subscribe(
        response => {
          this.order = response.data;
        },
        error => console.warn(error)
      );
  }

  shipOrder() {
    if (!confirm(`Вы уверены, что хотите отправить заказ?`)) {
      return;
    }

    this.orderService.shipOrder(this.order.id)
      .pipe(this.notyService.attachNoty({ successText: `Заказ переведён в статус 'Отправлен'` }))
      .subscribe(
        response => {
          this.order = response.data;
        },
        error => console.warn(error)
      );
  }

  printOrder() {
    this.orderService.printOrder(this.order.id).subscribe();
  }

  editOrder() {
    if (!confirm(`Вы уверены, что хотите изменить этот заказ?`)) {
      return;
    }

    this.router.navigate(['admin', 'order', 'edit', this.order.id]);
  }

  isStartOrderVisible(): boolean {
    return this.order.status === 'NEW';
  }

  isShipOrderVisible(): boolean {
    return this.order.status === 'STARTED';
  }
}
