function displayUserInfo(user) {
    const name = user.name || 'Unknown';
    const age = user.age || 'Unknown';
    const city = user.location?.city || 'Unknown';
    const country = user.location?.country || 'Unknown';
    const title = user.job?.title || 'Unknown';
    const company = user.job?.company || 'Unknown';
    const email = user.contact?.email || 'Unknown';
    const phone = user.contact?.phone || 'Unknown';

    return `Ten: ${name}\nTuoi: ${age}\nNoi o: ${city}, ${country}\nCong viec: ${title}\nCong ti: ${company}\nEmail: ${email}\nSDT: ${phone}`;
}
console.log(displayUserInfo({
    name: 'Vu Hong Anh',
    age: 20,
    location: {
        city:'Ha Noi',
        country: 'Viet Nam'
    },
    job: {
        title: 'Sinh vien',
        company: 'PTIT'
    },
    contact: {
        email: 'honganhzarch@gmail.com',
        phone: '0987654321'
    }
}));
