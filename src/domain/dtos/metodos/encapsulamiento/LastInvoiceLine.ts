export function LastInvoiceLine(payload:any):string{
    return`<cac:InvoiceLine>
      <cbc:ID>2</cbc:ID>
      <cbc:InvoicedQuantity unitCode="NIU">1.000000</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">0.00</cbc:LineExtensionAmount>
      <cbc:FreeOfChargeIndicator>true</cbc:FreeOfChargeIndicator>
      <cac:DocumentReference>
         <cbc:ID>TST1543623</cbc:ID>
         <cbc:IssueDate>2019-03-02</cbc:IssueDate>
         <cbc:DocumentTypeCode>1001-A</cbc:DocumentTypeCode>
         <cbc:DocumentType>Bienes Propios</cbc:DocumentType>
      </cac:DocumentReference>
      <cac:DocumentReference>
         <cbc:ID>GR8713461</cbc:ID>
         <cbc:IssueDate>2019-03-02</cbc:IssueDate>
         <cbc:DocumentTypeCode>AR</cbc:DocumentTypeCode>
      </cac:DocumentReference>
      <cac:PricingReference>
         <cac:AlternativeConditionPrice>
            <cbc:PriceAmount currencyID="COP">100.00</cbc:PriceAmount>
            <cbc:PriceTypeCode>03</cbc:PriceTypeCode>
            <cbc:PriceType>Otro valor</cbc:PriceType>
         </cac:AlternativeConditionPrice>
      </cac:PricingReference>
      <cac:Delivery>
         <cac:DeliveryLocation>
            <cbc:ID schemeID="999" schemeName="EAN">613124312412</cbc:ID>
         </cac:DeliveryLocation>
      </cac:Delivery>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="COP">30.00</cbc:TaxAmount>
         <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="COP">187.50</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="COP">30.00</cbc:TaxAmount>
            <cac:TaxCategory>
               <cbc:Percent>16.00</cbc:Percent>
               <cac:TaxScheme>
                  <cbc:ID>01</cbc:ID>
                  <cbc:Name>IVA</cbc:Name>
               </cac:TaxScheme>
            </cac:TaxCategory>
         </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Description>Bolsa</cbc:Description>
         <cac:SellersItemIdentification>
            <cbc:ID>91412012412</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeAgencyID="10" schemeID="001" schemeName="UNSPSC">18937100-7</cbc:ID>
         </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="COP">0.00</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="NIU">1.000000</cbc:BaseQuantity>
      </cac:Price>
    `
}