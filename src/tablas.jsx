import React from 'react';
import styled from 'styled-components';

import DataTable from 'react-data-table-component';
import { horario } from './horario';




const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			&#128269;
		</ClearButton>
	</>
);


const rowStyle = [
	{
		when: row => row.curso == '1A - Tarde',
		style: {
			backgroundColor: '#eedbf6'
		}
	}, {
		when:  row => row.curso == '1B - Tarde',
		style: {
				backgroundColor: '#d7dbf6'
		}
    }, {
        when:  row => row.curso == '1C - Tarde',
		style: {
				backgroundColor: '#f5ffee'
		}
	}

];

const customStyles = {
	headRow: {
		style: {
		    textAlign: 'center',
		}
	},
	headCells: {
    		style: {
                   textAlign: 'center',
		}
	},
	cells: {
		style: {
			width: '150px',
		}
	}
};


const columns = [
        {
                name: 'Hora',
                selector: row => row.hora,
		        sortable: true, 
	    },
        {
                name: 'Curso',
                selector: row => row.curso,
		        sortable: true
        },
	    {
		        name: 'Lunes',
		        selector: row => row.lunes,
                wrap: true,
		        cell: (row) => ( 
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.lunes.materia}</div>
                             <div style={{ color: 'green' }}>{row.lunes.profesor}</div>
	            		     <div>{row.lunes.aula}</div>
                         </div>
                       )
	    },
	    {
		        name: 'Martes',
		        selector: row => row.martes,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.martes.materia}</div>
                             <div style={{ color: 'green' }}>{row.martes.profesor}</div>
                             <div>{row.martes.aula}</div>
                         </div>
                       )

	    },
	    {
                name: 'Miercoles',
                selector: row => row.miercoles,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.miercoles.materia}</div>
                             <div style={{ color: 'green' }}>{row.miercoles.profesor}</div>
                             <div>{row.miercoles.aula}</div>
                         </div>
                       )
        },
        {
		        name: 'Jueves',
                selector: row => row.jueves,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.jueves.materia}</div>
                             <div style={{ color: 'green' }}>{row.jueves.profesor}</div>
                             <div>{row.jueves.aula}</div>
                         </div>
                       )

        },
	    {
                name: 'Viernes',
                selector: row => row.viernes,
		        wrap: true,
                cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.viernes.materia}</div>
                             <div style={{ color: 'green' }}>{row.viernes.profesor}</div>
                             <div>{row.viernes.aula}</div>
                         </div>
                       )

        }
];

function Tablas() {
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

	const filteredHorario = horario.filter(
		item => (
		    ((item.hora || item.curso) && (
			item.hora.toLowerCase().includes(filterText.toLowerCase()) ||
			item.curso.toLowerCase().includes(filterText.toLowerCase())))
			||
			((item.lunes.materia || item.lunes.profesor || item.lunes.aula) && (
			item.lunes.materia.toLowerCase().includes(filterText.toLowerCase()) ||
			item.lunes.profesor.toLowerCase().includes(filterText.toLowerCase()) ||
            item.lunes.aula.toLowerCase().includes(filterText.toLowerCase())))
			||
			((item.martes.materia || item.martes.profesor || item.martes.aula) && (
			item.martes.materia.toLowerCase().includes(filterText.toLowerCase()) ||
			item.martes.profesor.toLowerCase().includes(filterText.toLowerCase()) ||
            item.martes.aula.toLowerCase().includes(filterText.toLowerCase())))
			||
			((item.miercoles.materia || item.miercoles.profesor || item.miercoles.aula) && (
			item.miercoles.materia.toLowerCase().includes(filterText.toLowerCase()) ||
			item.miercoles.profesor.toLowerCase().includes(filterText.toLowerCase()) ||
            item.miercoles.aula.toLowerCase().includes(filterText.toLowerCase())))
			||
			((item.jueves.materia || item.jueves.profesor || item.jueves.aula) && (
			item.jueves.materia.toLowerCase().includes(filterText.toLowerCase()) ||
			item.jueves.profesor.toLowerCase().includes(filterText.toLowerCase()) ||
            item.jueves.aula.toLowerCase().includes(filterText.toLowerCase())))
			||
			((item.viernes.materia || item.viernes.profesor || item.viernes.aula) && (
			item.viernes.materia.toLowerCase().includes(filterText.toLowerCase()) ||
			item.viernes.profesor.toLowerCase().includes(filterText.toLowerCase()) ||
            item.viernes.aula.toLowerCase().includes(filterText.toLowerCase())))
		),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
		        title="Horarios - Gestión 2026"
			    columns={columns}
			    data={filteredHorario}
		        conditionalRowStyles={rowStyle}
			    customStyles={customStyles}
				subHeader
			    subHeaderComponent={subHeaderComponentMemo}
		/>
	);
};

export default Tablas;
