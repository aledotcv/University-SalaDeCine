let butacas = Array(24).fill(null);

function llenarTabla() {
    const tablaButacas = document.getElementById('tablaButacas');
    tablaButacas.innerHTML = '';

    butacas.forEach((seat, index) => {
        const row = document.createElement('tr');
        const celdaButaca = document.createElement('td');
        celdaButaca.id = 'butaca';
        celdaButaca.textContent = index + 1;
        const celdaEstado = document.createElement('td');
        if (seat) {
            celdaEstado.textContent = seat;
            celdaEstado.classList.add('ocupado');
        } else {
            celdaEstado.textContent = 'Disponible';
            celdaEstado.classList.add('disponible');
            celdaEstado.addEventListener('click', () => seleccionarButaca(index));
        }
        row.appendChild(celdaButaca);
        row.appendChild(celdaEstado);
        tablaButacas.appendChild(row);
    });
}

function seleccionarButaca(index) {
    if (index < 0 || index >= butacas.length) {
        document.getElementById('mensaje').textContent = 'Número de butaca inválido. Por favor, selecciona una butaca entre 1 y ' + butacas.length + '.';
        return;
    }

    if (butacas[index]) {
        document.getElementById('mensaje').textContent = 'Butaca ocupada. Por favor, selecciona otra.';
        return;
    }
    if(!document.getElementById('userName').value == ''){
    const numeroButaca = index + 1;
    document.getElementById('numeroButaca').value = numeroButaca;
    butacas[index] = document.getElementById('userName').value;
    llenarTabla();
    document.getElementById('mensaje').textContent = '¡Reservación exitosa!';
    }
}

function Reservar() {
    const numeroButaca = document.getElementById('numeroButaca').value;
    const userName = document.getElementById('userName').value;

    if (!numeroButaca || !userName) {
        document.getElementById('mensaje').textContent = 'Introduce el número de butaca y un nombre.';
        return;
    }

    const index = numeroButaca - 1;
    if (index < 0 || index >= butacas.length) {
        document.getElementById('mensaje').textContent = 'Número de butaca inválido. Por favor, selecciona una butaca entre 1 y ' + butacas.length + '.';
        return;
    }

    seleccionarButaca(index);
}

function modificarReserva() {
    const numeroButaca = document.getElementById('numeroButaca').value;
    const userName = document.getElementById('userName').value;

    if (!numeroButaca || !userName) {
        document.getElementById('mensaje').textContent = 'Introduce el número de butaca y un nombre.';
        return;
    }

    const index = numeroButaca - 1;
    if (index < 0 || index >= butacas.length) {
        document.getElementById('mensaje').textContent = 'Número de butaca inválido. Por favor, selecciona una butaca entre 1 y ' + butacas.length + '.';
        return;
    }

    if (!butacas[index]) {
        document.getElementById('mensaje').textContent = 'No se encontró una reservación para esta butaca. Realiza una nueva reservación.';
    } else {
        butacas[index] = userName;
        llenarTabla();
        document.getElementById('mensaje').textContent = '¡Reservación modificada!';
    }
}

function eliminarReserva() {
    const numeroButaca = document.getElementById('numeroButaca').value;

    if (!numeroButaca) {
        document.getElementById('mensaje').textContent = 'Por favor, introduce el número de butaca.';
        return;
    }

    const index = numeroButaca - 1;
    if (index < 0 || index >= butacas.length) {
        document.getElementById('mensaje').textContent = 'Número de butaca inválido. Por favor, selecciona una butaca entre 1 y ' + butacas.length + '.';
        return;
    }

    if (!butacas[index]) {
        document.getElementById('mensaje').textContent = 'No se encontró una reservación para esta butaca.';
    } else {
        butacas[index] = null;
        llenarTabla();
        document.getElementById('mensaje').textContent = 'Reservación eliminada.';
    }
}

window.onload = llenarTabla;