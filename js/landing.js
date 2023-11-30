document.addEventListener('DOMContentLoaded', function() {
    fetch('/js/dengue_cases_peru_2017_reordered.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('casos-dengue');
            tabla.innerHTML = '<tr><th>departamento</th><th>fecha</th><th>casos_actuales</th><th>Incidencia</th><th>Personas fallecidas</th></tr>';
            data.forEach(registro => {
                tabla.innerHTML += `<tr>
                    <td>${registro.departamento}</td>
                    <td>${registro.fecha}</td>
                    <td>${registro['casos_actuales']}</td>
                    <td>${registro.incidencia.toFixed(2)}</td>
                    <td>${registro['personas fallecidas']}</td>
                </tr>`;
            });
        });
});
