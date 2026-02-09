import {jsPDF} from 'jspdf';
import {applyPlugin} from 'jspdf-autotable'; // Important: this import adds the autoTable method to jsPDF

import './exportToPdf.css'

const exportToPdf = (columns, data, title, view) => {
	applyPlugin(jsPDF);
	console.log("iew", view);
	  const unit = "pt";
	  const size = "A4"; // Use A1, A2, A3 or A4
	  const orientation = "portrait"; // portrait or landscape
	  const marginLeft = 30;
	  
	  const doc = new jsPDF(orientation, unit, size);

	  doc.setFontSize(12);
	  doc.text(title, marginLeft, 30);

	  // Map your table columns and data to the format jspdf-autotable expects
	  const headers = [columns.map(col => col.name)]; // Assuming columns have a 'name' property
	  const body = data.map(row => [
		  row.hora, 
		  row.curso, 
		  row.lunes.materia + '\n' + row.lunes.profesor + '\n' + row.lunes.aula, 
		  row.martes.materia + '\n' + row.martes.profesor + '\n' + row.martes.aula,
		  row.miercoles.materia + '\n' + row.miercoles.profesor + '\n' + row.miercoles.aula,
		  row.jueves.materia + '\n' + row.jueves.profesor + '\n' + row.jueves.aula,
		  row.viernes.materia + '\n' + row.viernes.profesor + '\n' + row.viernes.aula
	  ]);

	  let content = {
		startY: 50,
		styles: { fontSize: 6, halign: 'center' },
		//columnStyles: { hora: { cellWidth: 40 }, curso: { cellWidth: 40 }, lunes: { cellWidth: 60 }, martes: { cellWidth: 60 }, miercoles: { cellWidth: 70 }, jueves: { cellWidth: 70 }, viernes: { cellWidth: 70 }},
		head: headers,
		body: body,
		didParseCell: (data) => {
			console.log(view);
			if (view) {
				return;
			}
               // Change background for cells in the 'Amount' column if the value is negative
            if (data.section === 'body') {
                // Access the raw data for the cell to check its value
                const cellValue = data.cell.raw;

				if (cellValue && cellValue.includes('Ceramica')) {
                    data.cell.styles.fillColor = [232, 76, 76];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Escultura')) {
                    data.cell.styles.fillColor = [63, 195, 128];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Dibujo')) {
                    data.cell.styles.fillColor = [248, 148, 6];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Pintura')) {
                    data.cell.styles.fillColor = [200, 96, 176];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Graficas')) {
                    data.cell.styles.fillColor = [55, 98, 190];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Composicion')) {
                    data.cell.styles.fillColor = [55, 20, 55];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Anatomia Artistica')) {
                    data.cell.styles.fillColor = [255, 41, 100];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Geometria')) {
                    data.cell.styles.fillColor = [255, 220, 49];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Introduccion y Marketing de arte')) {
                    data.cell.styles.fillColor = [25, 24, 120];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Filosofia del arte')) {
                    data.cell.styles.fillColor = [100, 24, 50];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Taller de Grado')) {
                    data.cell.styles.fillColor = [180, 180, 20];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Critica del arte')) {
                    data.cell.styles.fillColor = [14, 150, 180];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                } else if (cellValue && cellValue.includes('Historia del arte')) {
                    data.cell.styles.fillColor = [55, 100, 255];
					data.cell.styles.textColor = [255, 255, 255]; // White text for contrast
                }
            }
        },
	  };

	  console.log("contents:", content);
	  
	  doc.autoTable(content);
	  const res = doc.save((title?title:'horarios-2026') + '.pdf');
	  
	  console.log("result:", res);
};

export default exportToPdf;
