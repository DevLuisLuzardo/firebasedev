import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyAdmwUlN1EuvzVpqyO7sPWGCkLL20SKgM8",
  authDomain: "fir-dev-a4afe.firebaseapp.com",
  databaseURL: "https://fir-dev-a4afe-default-rtdb.firebaseio.com",
  projectId: "fir-dev-a4afe",
  storageBucket: "fir-dev-a4afe.appspot.com",
  messagingSenderId: "406718812809",
  appId: "1:406718812809:web:06c12ebe913cae9d622c58",
  measurementId: "G-7JB48STWSN"
};

// Inicializa Firebase
let app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos en tiempo real
let database = getDatabase(app);

// Define la referencia de la raíz
let rootRef = ref(database, '/');

// Función para aplicar estilos a la tabla y sus celdas
function applyStyles() {
  const table = document.getElementById("data-table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  const ths = table.getElementsByTagName("th");
  for (const th of ths) {
    th.style.border = "1px solid #ddd";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    th.style.textAlign = "left";
  }

  const tds = table.getElementsByTagName("td");
  for (const td of tds) {
    td.style.border = "1px solid #ddd";
    td.style.padding = "8px";
  }

}

function limpiarcampos() {
  try {
    document.getElementById("data-input-nc").value="";
    document.getElementById("data-input-nv").value="";
  } catch (error) {
    console.log("Error : " + error);
  }
}

// Función para mostrar los datos recuperados en una tabla
function displayData(data) {
  const table = document.getElementById("data-table");
  table.innerHTML = ""; // Limpiar contenido anterior

  // Iterar sobre los datos y crear filas para cada clave principal
  Object.keys(data).forEach(key => {
    // Crear fila de encabezado
    const headerRow = table.insertRow();
    const headerCell = document.createElement("th");
    headerCell.colSpan = 2; // Para que ocupe las dos columnas (encabezado y valor)
    headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitaliza la primera letra del encabezado


    const deleteCell = headerRow.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", async () => {
      try {

        // Define la referencia de la raiz (/) a eliminar o nodo
        let rootRefs = ref(database, '/' + key);
        await remove(rootRefs)
          .then(() => {
            console.log("Registro eliminado correctamente");
            document.getElementById("data-input-nc").value = error;
          })
          .catch((error) => {
            console.error("Error al eliminar registro:", error);
          });
      } catch (error) {
        console.error("Error al eliminar base de datos:", error);
      }

    });
    deleteCell.appendChild(deleteButton);


    headerRow.appendChild(headerCell);
    // Crear filas de datos
    const values = data[key];
    Object.keys(values).forEach(subKey => {
      const row = table.insertRow();
      const cellKey = row.insertCell();
      cellKey.textContent = subKey;
      const cellValue = row.insertCell();
      cellValue.textContent = values[subKey];
    });
  });

  // Aplicar estilos a la tabla después de construirla
  applyStyles();
}



// Adjunta un listener a la referencia de la raíz para escuchar cambios y mostrar los datos
onValue(rootRef, (snapshot) => {
  const data = snapshot.val();
  displayData(data);
  limpiarcampos();
}, {
  // Manejo de errores opcional
  onError: (error) => {
    console.error("Error leyendo datos:", error);
  }
});

