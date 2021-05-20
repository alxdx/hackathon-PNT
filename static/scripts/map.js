data = fetch('/static/sujetos_por_estado.json')
  .then(response => response.json())
  .then(data => {

    //console.log(data)

    var visualization = d3plus.viz()
    .container("#mp")
    .data(data)
    .type("geo_map")
    .coords({
      "value": "./static/mx_tj.json"
    })
    .id("id")
    .text("nombre")
    .size("Sujetos")
    .tooltip({
      "html": e => {

        for (var i = data.length - 1; i >= 0; i--) {
          obj = data[i];
          if (obj.id == e){
            break;
          }
        }
        code = "<div 'id'='tooltip_sujetos'>"
        if(obj["universidades"].length > 0){
          code = "<details open><summary>"+
                  "Universidades"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["universidades"].length - 1; i >= 0; i--) {
            nombre = obj["universidades"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }
        if(obj["educacion media superior"].length > 0){   
          code += "<details open><summary>"+
                  "Educacion Media Superior"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["educacion media superior"].length - 1; i >= 0; i--) {
            nombre = obj["educacion media superior"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }
        if(obj["comision electoral"].length > 0){
          code += "<details open><summary>"+
                  "Comisiones Electorales"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["comision electoral"].length - 1; i >= 0; i--) {
            nombre = obj["comision electoral"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";          
        }
        if(obj["partidos politicos"].length > 0){
          code += "<details open><summary>"+
                  "Partidos Politicos"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["partidos politicos"].length - 1; i >= 0; i--) {
            nombre = obj["partidos politicos"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";          
        }
        if(obj["candidatos"].length > 0){
          code += "<details open><summary>"+
                  "Candidatos"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["candidatos"].length - 1; i >= 0; i--) {
            nombre = obj["candidatos"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";          
        }

        if(obj["sindicatos"].length > 0){
          code += "<details open><summary>"+
                  "Sindicatos"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["sindicatos"].length - 1; i >= 0; i--) {
            nombre = obj["sindicatos"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }

        if(obj["medio ambiente"].length > 0){
          code += "<details open><summary>"+
                  "Agua y Medio Ambiente"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["medio ambiente"].length - 1; i >= 0; i--) {
            nombre = obj["medio ambiente"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";          
        }

        if(obj["comision derechos humanos"].length > 0){
          code += "<details open><summary>"+
                  "Comisiones de Derechos Humanos"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["comision derechos humanos"].length - 1; i >= 0; i--) {
            nombre = obj["comision derechos humanos"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }

        if(obj["DIF"].length > 0){
          code += "<details open><summary>"+
                  "Familia"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["DIF"].length - 1; i >= 0; i--) {
            nombre = obj["DIF"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }

        if(obj["salud"].length > 0){
          code += "<details open><summary>"+
                  "Instituciones De Salud"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["salud"].length - 1; i >= 0; i--) {
            nombre = obj["salud"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";          
        }

        if(obj["otras secretarias"].length > 0){
          code += "<details open><summary>"+
                  "Otras Secretarías"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["otras secretarias"].length - 1; i >= 0; i--) {
            nombre = obj["otras secretarias"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }

        if(obj["tribunales"].length > 0){
          code += "<details open><summary>"+
                  "Tribunales"+
                  "</summary>"+
                  "<ul>"
          aux = ""
          for (var i = obj["tribunales"].length - 1; i >= 0; i--) {
            nombre = obj["tribunales"][i]["nombre"];
            aux += "<li><a href=''>" + nombre + "</a></li>"
          }
          code += aux + "</ul></details>";
        }

        return code+"</div>"
      },
      "large": 600,
      "value": {"short": ["Sujetos",
                "Universidades",
                "Educación Media Superior",
                "Comisiones Electorales",
                "Partidos Políticos",
                "Candidatos",
                "Sindicatos",
                "Agua y Medio Ambiente",
                "Comisiones de Derechos Humanos",
                "Familia",
                "Instituciones de Salud",
                "Otras Secretarías",
                "Tribunales"
                ],
                "long": "id"
              }
      })
    .draw()

  }
);

/*

[
      "Sujetos",
      "Sindicatos",
      "Agua y Medio Ambiente",
      "Candidatos",
      "Comisiones Electorales",
      "Comisiones de Derechos Humanos",
      "Educación Media Superior",
      "Familia",
      "Instituciones de Salud",
      "Otras Secretarías",
      "Partidos Políticos",
      "Sindicatos",
      "Sujetos",
      "Tribunales",
      "Universidades"
      ]

[
  {estado: ----,
    total_sujetos: ---
    sujetos: [
      {
        nombre: ---,
        longitud: ----,
        latitud: -----
        
      }
    ]
  }
]
*/