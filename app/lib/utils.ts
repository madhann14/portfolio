export const formatDate = (date: Date | undefined) => {
    if(!date) return "PRESENT"
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
    }).format(date).toUpperCase();
}