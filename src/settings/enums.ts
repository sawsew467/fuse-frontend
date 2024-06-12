enum FieldFormItemType {
  Email = "email",
  Text = "text",
  Radio = "radio",
  Checkbox = "checkbox",
}

enum CardTypes {
  List = "list",
  Gird = "gird",
  Default = "default",
}

enum ActiveForgotPasswordStep {
  step1 = "1",
  step2 = "2",
  step3 = "3",
}

enum StatusTransaction {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}

enum TransactionType {
  PROMOTE = "promote",
  MEMBERSHIP = "membership",
}

enum CardMenu {
  EDIT = "edit",
  DELETE = "delete",
  PROMOTE = "promote",
  SOLD = "sold",
}

enum EvenStatusType {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  AUTHORIZE_NET = "AUTHORIZE_NET",
  CARD_BANKING = "CARD_BANKING",
  IYZIPAY = "IYZIPAY",
  PAYPAL = "PAYPAL",
  DIRECT_TRANSFER = "DIRECT_TRANSFER",
}

const enums = {
  FieldFormItemType,
  CardTypes,
  StatusTransaction,
  TransactionType,
  CardMenu,
  EvenStatusType,
  PaymentMethod,
  ActiveForgotPasswordStep,
};

export default enums;
