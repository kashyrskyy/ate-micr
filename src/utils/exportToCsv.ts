interface CsvRow {
    timestamp: string;
    question: string;
    answer: string;
}

export const exportToCsv = (filename: string, data: CsvRow[]) => {
    const csvRows: string[] = [];

    // Add CSV headers
    csvRows.push('timestamp,question,answer');

    // Add data rows with proper escaping
    data.forEach((row) => {
        const { timestamp, question, answer } = row;
        csvRows.push(
            `"${new Date(timestamp).toLocaleString()}","${question.replace(/"/g, '""')}","${answer.replace(/"/g, '""')}"`
        );
    });

    // Create a Blob from the CSV rows
    const csvBlob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);

    // Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};