document.addEventListener('DOMContentLoaded', function() {
    fetch('/js/dengue_cases_peru_2017_with_duplicates.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('casos-dengue');
            tabla.innerHTML = '<tr><th>Departamento</th><th>Fecha</th><th>Personas contagiadas</th><th>Incidencia</th><th>Personas fallecidas</th></tr>';
            data.forEach(registro => {
                tabla.innerHTML += `<tr>
                    <td>${registro.Departamento}</td>
                    <td>${registro.Fecha}</td>
                    <td>${registro['Personas contagiadas']}</td>
                    <td>${registro.Incidencia.toFixed(2)}</td>
                    <td>${registro['Personas fallecidas']}</td>
                </tr>`;
            });
        });
});
