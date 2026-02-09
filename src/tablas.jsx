import React from 'react';
import styled from 'styled-components';

import DataTable from 'react-data-table-component';
import { horario } from './horario';


import ExportPDF from './exportToPdf';


const CheckField = styled.input`
	height: 32px;
	width: 32px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	display: block;
	padding-left: 200px;
`;

const CheckLabelField = styled.label`
	height: 32px;
	width: 100px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	color: #0e000e;
	padding: 0 32px 0 16px;
	display: block;
	float: left;
`;

const SelectField = styled.select`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	display: block;
`;

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

const FilterComponent = ({ filterText, onFilter, onClear, onSelect }) => (
	<>
		<SelectField id="filteroptions" onChange={onSelect}>
				<option value="" defaultValue>(Todos)</option>
				<option value="1A">1A</option>
				<option value="1A - Tarde">1A Tarde</option>
				<option value="1A - Noche">1A Noche</option>
				<option value="1B">1B</option>
				<option value="1B - Tarde">1B Tarde</option>
				<option value="1B - Noche">1B Noche</option>
				<option value="1C">1C</option>
				<option value="1C - Tarde">1C Tarde</option>
				<option value="2A">2A</option>
				<option value="2A - Tarde">2A Tarde</option>
				<option value="2A - Noche">2A Noche</option>
				<option value="2B">2B</option>
				<option value="2B - Tarde">2B Tarde</option>
				<option value="2C">2C</option>
				<option value="2C - Tarde">2C Tarde</option>
				<option value="3A">3A</option>
				<option value="3A - Tarde">3A Tarde</option>
				<option value="3A - Noche">3A Noche</option>
				<option value="3B">3B</option>
				<option value="3B - Tarde">3B Tarde</option>
				<option value="3C">3C</option>
				<option value="3C - Tarde">3C Tarde</option>
				<option value="Tarde">Tarde</option>
				<option value="Noche">Noche</option>
		</SelectField>
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
	}, {
		when: row => row.curso == '2A - Tarde',
		style: {
			backgroundColor: '#eedbf6'
		}
	}, {
		when:  row => row.curso == '2B - Tarde',
		style: {
			backgroundColor: '#d7dbf6'
		}
    }, {
        when:  row => row.curso == '2C - Tarde',
		style: {
			backgroundColor: '#f5ffee'
		}
	}, {
		when: row => row.curso == '3A - Tarde',
		style: {
			backgroundColor: '#eedbf6'
		}
	}, {
		when:  row => row.curso == '3B - Tarde',
		style: {
			backgroundColor: '#d7dbf6'
		}
    }, {
        when:  row => row.curso == '3C - Tarde',
		style: {
			backgroundColor: '#f5ffee'
		}
	}, {
		when: row => row.curso == '1A - Noche',
		style: {
			backgroundColor: '#eedbf6'
		}
	}, {
		when:  row => row.curso == '1B - Noche',
		style: {
			backgroundColor: '#d7dbf6'
		}
    }, {
		when: row => row.curso == '2A - Noche',
		style: {
			backgroundColor: '#eedbf6'
		}
	}, {
		when: row => row.curso == '3A - Noche',
		style: {
			backgroundColor: '#f5ffee'
		}
	}

];

const customStyles = {
	headRow: {
		style: {
		    textAlign: 'center',
			justifyContent: 'center'
		}
	},
	headCells: {
    	style: {
            textAlign: 'center',
			justifyContent: 'center'
		}
	},
	cells: {
		style: {
			justifyContent: 'center',
			width: '160px',
		}
	}
};






function Tablas() {
	const [filterText, setFilterText] = React.useState('');
	const [scheduleView, setScheduleView] = React.useState(false);
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	
	const CellStyle = (dia) => {
		if (scheduleView) {
			return [];
		}
		return [
		  {
			when: row => row[dia].materia.includes('Escultura'),
			style: {
			  backgroundColor: 'rgba(63, 195, 128, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Dibujo'),
			style: {
			  backgroundColor: 'rgba(248, 148, 6, 0.6)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Ceramica'),
			style: {
			  backgroundColor: 'rgba(232, 76, 76, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Pintura'),
			style: {
			  backgroundColor: 'rgba(200, 96, 176, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Graficas'),
			style: {
			  backgroundColor: 'rgba(55, 98, 190, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Composicion'),
			style: {
			  backgroundColor: 'rgba(55, 20, 55, 0.2)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Anatomia Artistica'),
			style: {
			  backgroundColor: 'rgba(255, 41, 100, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Historia del arte'),
			style: {
			  backgroundColor: 'rgba(55, 100, 255, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Geometria'),
			style: {
			  backgroundColor: 'rgba(255, 220, 49, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Introduccion y Marketing de arte'),
			style: {
			  backgroundColor: 'rgba(25, 24, 120, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Filosofia del arte'),
			style: {
			  backgroundColor: 'rgba(100, 24, 50, 0.7)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Taller de Grado'),
			style: {
			  backgroundColor: 'rgba(180, 180, 20, 0.9)'
			},
		  },
		  {
			when: row => row[dia].materia.includes('Critica del arte'),
			style: {
			  backgroundColor: 'rgba(14, 150, 180, 0.9)'
			},
		  }
		];
	}
	
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
                             <div style={{ color: 'darkgreen' }}>{row.lunes.profesor}</div>
	            		     <div>{row.lunes.aula}</div>
                         </div>
                       ),
				conditionalCellStyles: CellStyle('lunes')
	    },
	    {
		        name: 'Martes',
		        selector: row => row.martes,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.martes.materia}</div>
                             <div style={{ color: 'darkgreen' }}>{row.martes.profesor}</div>
                             <div>{row.martes.aula}</div>
                         </div>
                       ),
				conditionalCellStyles: CellStyle('martes')
	    },
	    {
                name: 'Miercoles',
                selector: row => row.miercoles,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.miercoles.materia}</div>
                             <div style={{ color: 'darkgreen' }}>{row.miercoles.profesor}</div>
                             <div>{row.miercoles.aula}</div>
                         </div>
                       ),
				conditionalCellStyles: CellStyle('miercoles')
        },
        {
		        name: 'Jueves',
                selector: row => row.jueves,
		        wrap: true,
		        cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.jueves.materia}</div>
                             <div style={{ color: 'darkgreen' }}>{row.jueves.profesor}</div>
                             <div>{row.jueves.aula}</div>
                         </div>
                       ),
				conditionalCellStyles: CellStyle('jueves')
        },
	    {
                name: 'Viernes',
                selector: row => row.viernes,
		        wrap: true,
                cell: (row) => (
                         <div>
                             <div style={{ fontWeight: 'bold' }}>{row.viernes.materia}</div>
                             <div style={{ color: 'darkgreen' }}>{row.viernes.profesor}</div>
                             <div>{row.viernes.aula}</div>
                         </div>
                       ),
				conditionalCellStyles: CellStyle('viernes')
        }
	];

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
		const handleSelect = (e) => {
			setFilterText(e.target.value);
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} 
			onSelect={e => setFilterText(e.target.value)}
			/>
		);
	}, [filterText, resetPaginationToggle]);
	
	const performTitle = () => {
		if (filterText) {
			return 'IFA Raul G. Prada - Horario 2026 ( ' + filterText + ')';
		}
		
		return 'IFA Raul G. Prada - Horario 2026'; 
	}

	return (
		<div>
			<button className="export" onClick={() => ExportPDF(columns, filteredHorario, performTitle(), scheduleView)}>
				Exportar a PDF
			</button>
			<label htmlFor="activateView" id="labelView">
			<input id="activateView" type="checkbox" checked={scheduleView} onChange={(e) => setScheduleView(e.target.checked)}/>
			Vista Clasica</label>
			<DataTable
					title="Horarios - Gestión 2026"
					columns={columns}
					data={filteredHorario}
					conditionalRowStyles={rowStyle}
					customStyles={customStyles}
					subHeader
					subHeaderComponent={subHeaderComponentMemo}
			/>
		</div>
	);
};

export default Tablas;
