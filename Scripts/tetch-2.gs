//WT-List-2
=MAP(
 UNIQUE(FILTER(IRIS_List_All!E6:E&"♦"&IRIS_List_All!C6:C,IRIS_List_All!E6:E<>"")),
 LAMBDA(x,
 {
  INDEX(SPLIT(x,"♦"),1),
  INDEX(SPLIT(x,"♦"),2),
  TEXTJOIN(", ",TRUE,
   FILTER(
    IRIS_List_All!B6:B,
    (IRIS_List_All!E6:E=INDEX(SPLIT(x,"♦"),1))*
    (IRIS_List_All!C6:C=INDEX(SPLIT(x,"♦"),2))
   )
  )
 }
 )
)
