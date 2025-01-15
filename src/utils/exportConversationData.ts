import JSZip from 'jszip';

interface Message {
    question: string;
    answer: string;
    timestamp: string;
}

interface Metadata {
    conversationId: string;
    userId: string;
    chatbotId: string;
    chatbotTitle: string;
    startedAt: string;
    courseTitle: string;
    courseId: string;
    materialTitle: string;
    materialId: string;
    materialLink: string;
    chatbotCreatedBy: string;
    chatbotCreatedAt: string;
}

export const exportConversationData = async (
    conversationId: string,
    conversationHistory: Message[],
    metadata: Metadata
): Promise<void> => {
    const zip = new JSZip();

    // Create the CSV file
    const csvRows = ['timestamp,question,answer'];
    conversationHistory.forEach(({ timestamp, question, answer }) => {
        csvRows.push(
            `"${new Date(timestamp).toLocaleString()}","${question.replace(/"/g, '""')}","${answer.replace(/"/g, '""')}"`
        );
    });
    zip.file(`${conversationId}.csv`, csvRows.join('\n'));

    // Create the JSON metadata file
    zip.file(`${conversationId}_metadata.json`, JSON.stringify(metadata, null, 4)); // 4 spaces for indentation

    // Generate the ZIP file and trigger download
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = zipUrl;
    downloadLink.download = `${conversationId}.zip`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};