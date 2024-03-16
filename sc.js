const axios = require('axios');
const cheerio = require('cheerio');
const { format } = require('date-fns');

async function scrape() {
    const site_link = "https://reskilll.com/allevents";

    try {
        const response = await axios.get(site_link);
        const $ = cheerio.load(response.data);
        return $;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function main() {
    const today = new Date();
    const date_today = format(today, 'yyyy-MM-dd');
    console.log(date_today);

    const $ = await scrape();

    const events_listed = [];
    $('.eventtopic.eventName.pb-2').each((index, element) => {
        const get_event = $(element).text().trim();
        events_listed.push(get_event);
    });

    const events_name = events_listed.map(event => event.trim());

    const events_date_listed = [];
    $('.eventdate.ps-4').each((index, element) => {
        const get_event_dates = $(element).text().trim();
        events_date_listed.push(get_event_dates);
    });

    const monthListNum = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const monthListAlpha = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const events_date = events_date_listed.map(eventDate => {
        const [monthStr, dayStr, yearStr] = eventDate.trim().split(' ');
        const month = monthListNum[monthListAlpha.indexOf(monthStr)];
        return `${yearStr}-${month}-${dayStr}`;
    });

    const live_events_date = events_date.filter(eventDate => eventDate >= date_today);

    const events_link = [];
    $('.text-decoration-none.registerevent').each((index, element) => {
        const link = $(element).attr('href');
        events_link.push(link);
    });

    const event_full_detail = live_events_date.map((liveEventDate, index) => {
        return `${events_name[index]} on ${liveEventDate} ------LINK IS-----> ${events_link[index]}`;
    });

    event_full_detail.forEach(event_full_info => {
        console.log(event_full_info);
        console.log();
    });
}

main().catch(error => console.error("Error:", error));

