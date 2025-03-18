//ampos que deben ir en la consulta

export function CBCcampos(payload:any):any{

return`
 <cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>
   <!-- no se puede mover -->
   <cbc:CustomizationID>05</cbc:CustomizationID>
   <!-- version del formato de la dian -->
   <cbc:ProfileID>DIAN 2.1</cbc:ProfileID>
   <!-- este codigo es el testigo con el valor del registro de cbc:UUID.@schemeID si son iguales confirma y si son desiguales rechaza -->
   <cbc:ProfileExecutionID>2</cbc:ProfileExecutionID>
   <!-- este es el numero de la factura incluye un prefijo + un consecutivo -->
   <cbc:ID>SETP990000002</cbc:ID>
   <cbc:UUID schemeID="2" schemeName="CUFE-SHA384">
      941cf36af62dbbc06f105d2a80e9bfe683a90e84960eae4d351cc3afbe8f848c26c39bac4fbc80fa254824c6369ea694</cbc:UUID>
      <!-- fecha de edicion de la factura -->
   <cbc:IssueDate>2019-06-20</cbc:IssueDate>
   <!-- hora de la edicion -->
   <cbc:IssueTime>09:15:23-05:00</cbc:IssueTime>
   <!-- tipo de factura tocara ver en el excel por si se quiere cambiar de tipo de factura -->
   <cbc:InvoiceTypeCode>01</cbc:InvoiceTypeCode>
   <!-- comentario libre en el espacio de facturacion -->
   <cbc:Note>
      SETP9900000022019-06-2009:15:23-05:0012600.06012424.01040.00030.0014024.07900508908900108281fc8eac422eba16e22ffd8c6f94b3f40a6e38162c2</cbc:Note>
      <!-- esta es la divisa de la factura aqui se debera ver el excel para cuadrar codigos o colocarla por defecto -->
   <cbc:DocumentCurrencyCode listAgencyID="6"
      listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha">COP</cbc:DocumentCurrencyCode>
   <cbc:LineCountNumeric>2</cbc:LineCountNumeric>
   <!-- estos campos de abajo son por ejemplo el tipo de facturacion de servicios publicos de una fecha a otra -->
`
}