
 const funcionTextArea = document.querySelector(".textArea")

 const boton = document.querySelector(".boton--calcular");

    

 
 
 
 
 
 
 
 
 //* javaScript funciones
 
boton.addEventListener("click", calcular);

boton.addEventListener("click", graficar);

function graficar(){
  document.querySelector(".grafico").innerHTML = ``;

  const textarea = funcionTextArea.value;
  var funcion1Input = textarea.replace(/\s/g, '');
  var funcion2Input = calcularDerivada();

  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = 400 - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;

  var xScale = d3.scaleLinear()
    .domain([-10, 10])
    .range([0, width]);

  var yScale = d3.scaleLinear()
    .domain([-100, 100])
    .range([height, 0]);

  var line = d3.line()
    .x(function(d) { return xScale(d.x); })
    .y(function(d) { return yScale(d.y); });

  var svg = d3.select(".grafico") // Selecciona el contenedor por su clase
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Dibuja el eje X
  svg.append("line")
    .attr("x1", 0)
    .attr("y1", yScale(0))
    .attr("x2", width)
    .attr("y2", yScale(0))
    .attr("stroke", "black");

  // Dibuja el eje Y
  svg.append("line")
    .attr("x1", xScale(0))
    .attr("y1", 0)
    .attr("x2", xScale(0))
    .attr("y2", height)
    .attr("stroke", "black");

  function evaluarExpresion(expression, x) {
    try {
      var result = math.evaluate(expression, { x: x });
      return isNaN(result) ? 0 : result;
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return 0;
    }
  }

  var xValues = d3.range(-10, 10, 0.1);

  var data1 = xValues.map(function(x) {
    return { x: x, y: evaluarExpresion(funcion1Input || '', x) };
  });

  var data2 = xValues.map(function(x) {
    return { x: x, y: evaluarExpresion(funcion2Input || '', x) };
  });

  svg.append("path")
    .datum(data1)
    .attr("fill", "none")
    .attr("stroke", "#892CDC")
    .attr("stroke-width", 1)
    .attr("d", line);

  svg.append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", "#FF6B6B")
    .attr("stroke-width", 1)
    .attr("d", line);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .call(d3.axisLeft(yScale));
}

function calcularDerivada() {
  const textarea = funcionTextArea.value;
  var funcionInput = textarea.replace(/\s/g, '');

  try {
    var derivada = math.derivative(funcionInput, 'x');
    return derivada.toString();
  } catch (error) {
    console.error("Error calculating derivative:", error);
    return '';
  }
}

function calcularDerivada() {
 
  const textarea = funcionTextArea.value;
  var funcionInput = textarea.replace(/\s/g, '');

  try {
    var derivada = math.derivative(funcionInput, 'x');
    document.querySelector(".resultado").innerHTML =`<h3>Derivada</h3> <br>` + derivada.toString();
    return derivada.toString();
  } catch (error) {
    console.error("Error calculating derivative:", error);
    return '';
  }
}








function calcular(){
  const textarea = funcionTextArea.value;
  const expression = textarea.replace(/\s/g, ''); 

  const derivative = calculateDerivative(expression);


  console.log(derivative); 

}
 

function calculateDerivative(expression) {
  const node = math.parse(expression);
  const derivativeNode = math.derivative(node, 'x');
  const derivative = math.simplify(derivativeNode).toString();
  return derivative;
}

 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //*javascript para menu desplegable


 const iconoMenu = document.querySelector(".iconoMenu");
 
 
 const toggleMenu = () => {
  iconoMenu.classList.toggle("visible");
     document.body.style.overflow = iconoMenu.classList.contains("visible") ? "hidden" : "auto";
   };
   
   iconoMenu.addEventListener("click", toggleMenu);

 
 