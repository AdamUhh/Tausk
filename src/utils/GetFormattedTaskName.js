export const getFormattedTaskName = (desc) => {
    console.log(desc);

    //Unorderd/Ordered
    if (desc.blocks[0].data.items) {
        return desc.blocks[0].data.items[0]
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }

    //Quote->Caption
    if (!desc.blocks[0].data.text && desc.blocks[0].data.caption) {
        return desc.blocks[0].data.caption
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }

    //Heading/Paragraph/Link/Quote
    if (desc.blocks[0].data.text) {
        return desc.blocks[0].data.text
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }
    //Table
    if (desc.blocks[0].data.content) {
        return desc.blocks[0].data.content[0]
            .filter((text) => text.length > 0)[0]
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }
    // Code
    if (desc.blocks[0].data.code) {
        return desc.blocks[0].data.code
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }
    // Simple-Image
    if (desc.blocks[0].data.url) {
        return desc.blocks[0].data.url
            .replace(/<[^>]+>/g, '')
            .substring(0, 150);
    }

    return '* * *';
};
