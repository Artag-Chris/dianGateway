//referente a los medios de pago y los impuestos
export function PaymentMeans(payload:any):string{
    return`<cac:PaymentMeans>
      <!-- Grupo de campos para información relacionadas con el pago de la factura -->
      <!-- Formas de pago demas que se debera hacer alguna conversion de campos parametricos -->
      <cbc:ID>2</cbc:ID>
      <!-- Código correspondiente al medio de pago -->
      <cbc:PaymentMeansCode>41</cbc:PaymentMeansCode>
      <cbc:PaymentDueDate>2019-06-30</cbc:PaymentDueDate>
      <!-- Identificador del pago -->
      <cbc:PaymentID>1234</cbc:PaymentID>
   </cac:PaymentMeans>
   <cac:PrepaidPayment>
      <!-- esto es en referente a un anticipo  -->
      <cbc:ID>SFR3123856</cbc:ID>
      <cbc:PaidAmount currencyID="COP">1000.00</cbc:PaidAmount>
      <cbc:ReceivedDate>2018-09-29</cbc:ReceivedDate>
      <cbc:PaidDate>2018-09-29</cbc:PaidDate>
      <cbc:InstructionID>Prepago recibido</cbc:InstructionID>
   </cac:PrepaidPayment>
   <cac:TaxTotal>
      <!-- Grupo de campos para información totales relacionadas con un tributo -->
      <!-- valor del trubuto : IVA -->
      <cbc:TaxAmount currencyID="COP">2424.01</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <!-- Grupo de información que definen los
       valores del tributo -->
         <!-- Base Imponible sobre la que se calcula el
        valor del tributo 
        En el caso de que el tributo sea una porcentaje del valor
        tributable: informar la base imponible en valor monetario.
        En el caso de que el tributo es un valor fijo por unidad
        tributada: informar el número de unidades tributadas -->
         <cbc:TaxableAmount currencyID="COP">12600.06</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>01</cbc:ID>
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
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
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="COP">0.00</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>0.000</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>03</cbc:ID>
               <cbc:Name>ICA</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="COP">0.00</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>0.00</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>04</cbc:ID>
               <cbc:Name>INC</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:LegalMonetaryTotal>
      <!-- Total valor bruto, suma de los valores
     brutos de las líneas de la factura.
     sin calcular los impuestos aun -->
      <cbc:LineExtensionAmount currencyID="COP">12600.06</cbc:LineExtensionAmount>
      <!-- Total Valor Base Imponible : Base
      imponible para el cálculo de los tributos antes de los impuestos -->
      <cbc:TaxExclusiveAmount currencyID="COP">12787.56</cbc:TaxExclusiveAmount>
      <!-- Total Valor Base Imponible : Base
      imponible para el cálculo de los tributos despues de los impuestos -->
      <!-- tambien hay un campo de descuentos pero no esta aplicado AllowanceTotal -->
      <cbc:TaxInclusiveAmount currencyID="COP">15024.07</cbc:TaxInclusiveAmount>
      <cbc:PrepaidAmount currencyID="COP">1000.00</cbc:PrepaidAmount>
      <cbc:PayableAmount currencyID="COP">14024.07</cbc:PayableAmount>
   </cac:LegalMonetaryTotal>
   <cac:InvoiceLine>
      <cbc:ID>1</cbc:ID>
      <!-- Cantidad del producto o servicio -->
      <cbc:InvoicedQuantity unitCode="EA">1.000000</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">12600.06</cbc:LineExtensionAmount>
      <!-- indicador si es gratis o no -->
      <cbc:FreeOfChargeIndicator>false</cbc:FreeOfChargeIndicator>
      <cac:Delivery>
         <cac:DeliveryLocation>
            <cbc:ID schemeID="999" schemeName="EAN">613124312412</cbc:ID>
         </cac:DeliveryLocation>
      </cac:Delivery>
      <cac:AllowanceCharge>
         <!-- Indica que el elemento es un Cargo y no un descuento mejor dicho si tiene costos extra
         por x razon -->
         <cbc:ID>1</cbc:ID>
         <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
         <!-- texto libre para informar por que es un descuento no un cargo extra -->
         <cbc:AllowanceChargeReason>Descuento por cliente frecuente</cbc:AllowanceChargeReason>
         <cbc:MultiplierFactorNumeric>33.33</cbc:MultiplierFactorNumeric>
         <cbc:Amount currencyID="COP">6299.94</cbc:Amount>
         <cbc:BaseAmount currencyID="COP">18900.00</cbc:BaseAmount>
      </cac:AllowanceCharge>
      <cac:TaxTotal>
         <!-- Grupo de campos para información
       relacionadas con un tributo aplicable a esta 
       línea de la factura -->
         <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
         <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="COP">12600.06</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
            <cac:TaxCategory>
               <!-- porcentaje del iva o del impuesto -->
               <cbc:Percent>19.00</cbc:Percent>
               <cac:TaxScheme>
                  <cbc:ID>01</cbc:ID>
                  <cbc:Name>IVA</cbc:Name>
               </cac:TaxScheme>
            </cac:TaxCategory>
         </cac:TaxSubtotal>
      </cac:TaxTotal>
       <cac:Item>
         <!-- Grupo de información que describen las características del artículo o servicio -->
         <!-- descripcion del objeto o servicio -->
         <cbc:Description>AV OASYS -2.25 (8.4) LENTE DE CONTATO</cbc:Description>
         <cac:SellersItemIdentification>
            <!-- Código del vendedor correspondiente al artículo -->
            <cbc:ID>AOHV84-225</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:AdditionalItemIdentification>
            <!-- Código de acuerdo con el estándar descrito en el atributo ID/@schemeAgencyID -->
            <cbc:ID schemeID="999" schemeName="EAN13">6543542313534</cbc:ID>
         </cac:AdditionalItemIdentification>
      </cac:Item>
      <cac:Price>
         <!-- referente al precio y la cantidad -->
         <cbc:PriceAmount currencyID="COP">18900.00</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="EA">1.000000</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
    `.trim();
}