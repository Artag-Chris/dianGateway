import { AccountingCustomerParty, AccountingSupplierParty, CacDelivery, CacInvoicePeriodAndBillingReference, CBCcampos, LastInvoiceLine, PaymentMeans, TaxRepresentativeParty, UBLExtensionDianExtentions, UBLExtensionSignature } from ".";

//la factura generica que enviaremos

export function facturaGenerica(payload:any):string{
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
   xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
   xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
   xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
   xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
   xmlns:sts="dian:gov:co:facturaelectronica:Structures-2-1"
   xmlns:xades="http://uri.etsi.org/01903/v1.3.2#"
   xmlns:xades141="http://uri.etsi.org/01903/v1.4.1#"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 http://docs.oasis-open.org/ubl/os-UBL-2.1/xsd/maindoc/UBL-Invoice-2.1.xsd">
      ${UBLExtensionDianExtentions(payload)}
      ${UBLExtensionSignature(payload)}
      ${CBCcampos(payload)}
      ${CacInvoicePeriodAndBillingReference(payload)}
      ${AccountingSupplierParty(payload)}
      ${AccountingCustomerParty(payload)}
      ${TaxRepresentativeParty(payload)}
      ${CacDelivery(payload)}
      ${PaymentMeans(payload)}
      ${LastInvoiceLine(payload)}
</Invoice>
    `
}