import { CustomerAddressDto } from './customer-address.dto';

export class AddOrUpdateCustomerDto {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: any = undefined;
  creationDate: Date = undefined;
  lastLoggedIn: Date = undefined;
  isLocked: boolean = undefined;
  isEmailConfirmed: boolean = undefined;
  isPhoneNumberConfirmed: boolean = undefined;
  note: string = '';
  addresses: CustomerAddressDto[] = [];
  reviewIds: number[] = [];
  orderIds: number[] = [];
  wishlistProductIds: number[] = [];
}

export class CustomerDto extends AddOrUpdateCustomerDto {
  id: number;
}
