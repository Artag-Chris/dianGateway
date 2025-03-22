export function CacInvoicePeriodAndBillingReference(payload: any): string {
    return `<cac:InvoicePeriod>
      <cbc:StartDate>2019-05-01</cbc:StartDate>
      <cbc:EndDate>2019-05-30</cbc:EndDate>
   </cac:InvoicePeriod>
   <!-- esto hace referencia a la nota de credito que dio origen a la factura de credito
   se coloca que si es prepago o postpago etc -->
   <cac:BillingReference>
      <cac:InvoiceDocumentReference>
         <cbc:ID>SFR3123856</cbc:ID>
         <cbc:UUID schemeName="CUFE-SHA1">a675432fecc1d537361dcdbdfbd08d6e5283f2bc</cbc:UUID>
         <cbc:IssueDate>2018-09-29</cbc:IssueDate>
         <cbc:DocumentDescription>Prepago recibido</cbc:DocumentDescription>
      </cac:InvoiceDocumentReference>
   </cac:BillingReference>
   <cac:BillingReference>
      <cac:InvoiceDocumentReference>
         <cbc:ID>SETP990000101</cbc:ID>
         <cbc:UUID schemeName="CUFE-SHA384">
            1dc661228f152332d876e1f1cd2042ecdea1804ed0da78f84dc9ee0938d69f17037dc53f97778ed2721d65c1fc3c73ac</cbc:UUID>
         <cbc:IssueDate>2018-09-29</cbc:IssueDate>
         <cbc:DocumentDescription>Factura anterior</cbc:DocumentDescription>
      </cac:InvoiceDocumentReference>
   </cac:BillingReference>
    `.trim()
}