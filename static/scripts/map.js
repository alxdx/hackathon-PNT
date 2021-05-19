var sample_data = [
    {"value": 231, "state_code": 7, "name": "Aguascalientes"}

  ]
  
  var visualization = d3plus.viz()
    .container("#mp")
    .type("geo_map")
    .coords({
      "value": "./static/mx_tj.json"
    })
    .id("state_code")
    .text("state_name")
    .tooltip("value")
    .draw()