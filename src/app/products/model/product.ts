import {Target} from '../../manufacturers/model/target';
import {Participant} from '../../categories/model/participant';

export class Product {
  productId: number;
  productType: string;
  firstName: string;
  lastName: string;
  phoneNr: string;
  callDuration: string;
  emailAddress: string;
  coordinates: string;
  direction: string;
  targetModel: Target;
  participantModel: Participant;
}
