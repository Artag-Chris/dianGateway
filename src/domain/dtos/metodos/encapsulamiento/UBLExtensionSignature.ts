//aqui va lo referente a el certificado para enviar a la dian planeo que tenga manejo de variables de entorno


export function UBLExtensionSignature(payload:any):any{

    return `<ext:UBLExtension>
         <ext:ExtensionContent>
            <!-- minimo se debe usar una extencion de la dian -->
            <ds:Signature Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4">
               <ds:SignedInfo>
                  <!-- se debe dejar quieto estos campos a menos que se quiera cambiar el algoritmo
                  de sifrado -->
                  <ds:CanonicalizationMethod
                     Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
                  <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" />
                  <ds:Reference Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-ref0" URI="">
                     <ds:Transforms>
                        <ds:Transform
                           Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
                     </ds:Transforms>
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>akcOQ5qEh4dkMwt0d5BoXRR8Bo4vdy9DBZtfF5O0SsA=</ds:DigestValue>
                  </ds:Reference>
                  <ds:Reference URI="#xmldsig-87d128b5-aa31-4f0b-8e45-3d9cfa0eec26-keyinfo">
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>troRYR2fcmJLV6gYibVM6XlArbddSCkjYkACZJP47/4=</ds:DigestValue>
                  </ds:Reference>
                  <ds:Reference Type="http://uri.etsi.org/01903#SignedProperties"
                     URI="#xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-signedprops">
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>hpIsyD/08hVUc1exnfEyhGyKX5s3pUPbpMKmPhkPPqU=</ds:DigestValue>
                  </ds:Reference>
               </ds:SignedInfo>
               <!-- no se si es un numero de factura que incluye un prefijo + un consecutivo
               autorizado -->
               <ds:SignatureValue Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-sigvalue">
                  q4HWeb47oLdDM4D3YiYDOSXE4YfSHkQKxUfSYiEiPuP2XWvD7ELZTC4ENFv6krgDAXczmi0W7OMi
                  LIVvuFz0ohPUc4KNlUEzqSBHVi6sC34sCqoxuRzOmMEoCB9Tr4VICxU1Ue9XhgP7o6X4f8KFAQWW
                  NaeTtA6WaO/yUtq91MKP59aAnFMfYl8lXpaS0kpUwuui3wdCZsGycsl1prEWiwzpaukEUOXyTo7o
                  RBOuNsDIUhP24Fv1alRFnX6/9zEOpRTs4rEQKN3IQnibF757LE/nnkutElZHTXaSV637gpHjXoUN
                  5JrUwTNOXvmFS98N6DczCQfeNuDIozYwtFVlMw==
               </ds:SignatureValue>
               <ds:KeyInfo Id="xmldsig-87d128b5-aa31-4f0b-8e45-3d9cfa0eec26-keyinfo">
                  <ds:X509Data>
                     <ds:X509Certificate>
                        <!-- certificado que es enviado en el xml -->
                        MIIIODCCBiCgAwIBAgIIbAsHYmJtoOIwDQYJKoZIhvcNAQELBQAwgbQxIzAhBgkqhkiG9w0BCQEW
                        FGluZm9AYW5kZXNzY2QuY29tLmNvMSMwIQYDVQQDExpDQSBBTkRFUyBTQ0QgUy5BLiBDbGFzZSBJ
                        STEwMC4GA1UECxMnRGl2aXNpb24gZGUgY2VydGlmaWNhY2lvbiBlbnRpZGFkIGZpbmFsMRMwEQYD
                        VQQKEwpBbmRlcyBTQ0QuMRQwEgYDVQQHEwtCb2dvdGEgRC5DLjELMAkGA1UEBhMCQ08wHhcNMTcw
                        OTE2MTM0ODE5WhcNMjAwOTE1MTM0ODE5WjCCARQxHTAbBgNVBAkTFENhbGxlIEZhbHNhIE5vIDEy
                        IDM0MTgwNgYJKoZIhvcNAQkBFilwZXJzb25hX2p1cmlkaWNhX3BydWViYXMxQGFuZGVzc2NkLmNv
                        bS5jbzEsMCoGA1UEAxMjVXN1YXJpbyBkZSBQcnVlYmFzIFBlcnNvbmEgSnVyaWRpY2ExETAPBgNV
                        BAUTCDExMTExMTExMRkwFwYDVQQMExBQZXJzb25hIEp1cmlkaWNhMSgwJgYDVQQLEx9DZXJ0aWZp
                        Y2FkbyBkZSBQZXJzb25hIEp1cmlkaWNhMQ8wDQYDVQQHEwZCb2dvdGExFTATBgNVBAgTDEN1bmRp
                        bmFtYXJjYTELMAkGA1UEBhMCQ08wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0Dn8t
                        oZ2CXun+63zwYecJ7vNmEmS+YouH985xDek7ImeE9lMBHXE1M5KDo7iT/tUrcFwKj717PeVL52Nt
                        B6WU4+KBt+nrK+R+OSTpTno5EvpzfIoS9pLI74hHc017rY0wqjl0lw+8m7fyLfi/JO7AtX/dthS+
                        MKHIcZ1STPlkcHqmbQO6nhhr/CGl+tKkCMrgfEFIm1kv3bdWqk3qHrnFJ6s2GoVNZVCTZW/mOzPC
                        NnnUW12LDd/Kd+MjN6aWbP0D/IJbB42Npqv8+/oIwgCrbt0sS1bysUgdT4im9bBhb00MWVmNRBBe
                        3pH5knzkBid0T7TZsPCyiMBstiLT3yfpAgMBAAGjggLpMIIC5TAMBgNVHRMBAf8EAjAAMB8GA1Ud
                        IwQYMBaAFKhLtPQLp7Zb1KAohRCdBBMzxKf3MDcGCCsGAQUFBwEBBCswKTAnBggrBgEFBQcwAYYb
                        aHR0cDovL29jc3AuYW5kZXNzY2QuY29tLmNvMIIB4wYDVR0gBIIB2jCCAdYwggHSBg0rBgEEAYH0
                        SAECCQIFMIIBvzBBBggrBgEFBQcCARY1aHR0cDovL3d3dy5hbmRlc3NjZC5jb20uY28vZG9jcy9E
                        UENfQW5kZXNTQ0RfVjIuNS5wZGYwggF4BggrBgEFBQcCAjCCAWoeggFmAEwAYQAgAHUAdABpAGwA
                        aQB6AGEAYwBpAPMAbgAgAGQAZQAgAGUAcwB0AGUAIABjAGUAcgB0AGkAZgBpAGMAYQBkAG8AIABl
                        AHMAdADhACAAcwB1AGoAZQB0AGEAIABhACAAbABhAHMAIABQAG8AbADtAHQAaQBjAGEAcwAgAGQA
                        ZQAgAEMAZQByAHQAaQBmAGkAYwBhAGQAbwAgAGQAZQAgAFAAZQByAHMAbwBuAGEAIABKAHUAcgDt
                        AGQAaQBjAGEAIAAoAFAAQwApACAAeQAgAEQAZQBjAGwAYQByAGEAYwBpAPMAbgAgAGQAZQAgAFAA
                        cgDhAGMAdABpAGMAYQBzACAAZABlACAAQwBlAHIAdABpAGYAaQBjAGEAYwBpAPMAbgAgACgARABQ
                        AEMAKQAgAGUAcwB0AGEAYgBsAGUAYwBpAGQAYQBzACAAcABvAHIAIABBAG4AZABlAHMAIABTAEMA
                        RDAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwRgYDVR0fBD8wPTA7oDmgN4Y1aHR0cDov
                        L3d3dy5hbmRlc3NjZC5jb20uY28vaW5jbHVkZXMvZ2V0Q2VydC5waHA/Y3JsPTEwHQYDVR0OBBYE
                        FL9BXJHmFVE5c5Ai8B1bVBWqXsj7MA4GA1UdDwEB/wQEAwIE8DANBgkqhkiG9w0BAQsFAAOCAgEA
                        b/pa7yerHOu1futRt8QTUVcxCAtK9Q00u7p4a5hp2fVzVrhVQIT7Ey0kcpMbZVPgU9X2mTHGfPdb
                        R0hYJGEKAxiRKsmAwmtSQgWh5smEwFxG0TD1chmeq6y0GcY0lkNA1DpHRhSK368vZlO1p2a6S13Y
                        1j3tLFLqf5TLHzRgl15cfauVinEHGKU/cMkjLwxNyG1KG/FhCeCCmawATXWLgQn4PGgvKcNrz+y0
                        cwldDXLGKqriw9dce2Zerc7OCG4/XGjJ2PyZOJK9j1VYIG4pnmoirVmZbKwWaP4/TzLs6LKaJ4b6
                        6xLxH3hUtoXCzYQ5ehYyrLVwCwTmKcm4alrEht3FVWiWXA/2tj4HZiFoG+I1OHKmgkNv7SwHS7z9
                        tFEFRaD3W3aD7vwHEVsq2jTeYInE0+7r2/xYFZ9biLBrryl+q22zM5W/EJq6EJPQ6SM/eLqkpzqM
                        EF5OdcJ5kIOxLbrIdOh0+grU2IrmHXr7cWNP6MScSL7KSxhjPJ20F6eqkO1Z/LAxqNslBIKkYS24
                        VxPbXu0pBXQvu+zAwD4SvQntIG45y/67h884I/tzYOEJi7f6/NFAEuV+lokw/1MoVsEgFESASI9s
                        N0DfUniabyrZ3nX+LG3UFL1VDtDPWrLTNKtb4wkKwGVwqtAdGFcE+/r/1WG0eQ64xCq0NLutCxg= </ds:X509Certificate>
                  </ds:X509Data>
               </ds:KeyInfo>
               <ds:Object>
                  <xades:QualifyingProperties Target="#xmldsig-d0322c4f-be87-495a-95d5-9244980495f4">
                     <xades:SignedProperties
                        Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-signedprops">
                        <xades:SignedSignatureProperties>
                           <xades:SigningTime>2019-06-21T19:09:35.993-05:00</xades:SigningTime>
                           <xades:SigningCertificate>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>nem6KXhqlV0A0FK5o+MwJZ3Y1aHgmL1hDs/RMJu7HYw=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD.,OU=Division
                                       de certificacion entidad final,CN=CA ANDES SCD S.A. Clase
                                       II,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f
                                    </ds:X509IssuerName>
                                    <ds:X509SerialNumber>7785324499979575522</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>oEsyOEeUGTXr45Jr0jHJx3l/9CxcsxPMOTarEiXOclY=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD,OU=Division de
                                       certificacion,CN=ROOT CA ANDES SCD
                                       S.A.,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f</ds:X509IssuerName>
                                    <ds:X509SerialNumber>8136867327090815624</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>Cs7emRwtXWVYHJrqS9eXEXfUcFyJJBqFhDFOetHu8ts=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD,OU=Division de
                                       certificacion,CN=ROOT CA ANDES SCD
                                       S.A.,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f</ds:X509IssuerName>
                                    <ds:X509SerialNumber>3184328748892787122</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                           </xades:SigningCertificate>
                           <xades:SignaturePolicyIdentifier>
                              <xades:SignaturePolicyId>
                                 <xades:SigPolicyId>
                                    <xades:Identifier>
                                       https://facturaelectronica.dian.gov.co/politicadefirma/v1/politicadefirmav2.pdf</xades:Identifier>
                                 </xades:SigPolicyId>
                                 <xades:SigPolicyHash>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>dMoMvtcG5aIzgYo0tIsSQeVJBDnUnfSOfBpxXrmor0Y=</ds:DigestValue>
                                 </xades:SigPolicyHash>
                              </xades:SignaturePolicyId>
                           </xades:SignaturePolicyIdentifier>
                           <xades:SignerRole>
                              <xades:ClaimedRoles>
                                 <xades:ClaimedRole>supplier</xades:ClaimedRole>
                              </xades:ClaimedRoles>
                           </xades:SignerRole>
                        </xades:SignedSignatureProperties>
                     </xades:SignedProperties>
                  </xades:QualifyingProperties>
               </ds:Object>
            </ds:Signature>
         </ext:ExtensionContent>
      </ext:UBLExtension>
   </ext:UBLExtensions>
    `.trim()
}