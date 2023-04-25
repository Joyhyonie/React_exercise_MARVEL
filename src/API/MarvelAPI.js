import md5 from 'md5';

const ts = Date.now();
const PUBLIC_KEY = '99218f33bc2a1a09255e029d950d7373';
const PRIVATE_KEY = 'adcb2a4bb6b8436e8b366a143f924a6541793379';
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

/* 캐릭터 리스트 조회 */
export async function getCharacterList() {

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ ts }&apikey=${ PUBLIC_KEY }&hash=${ hash }&limit=100`;
    const response = await fetch(url);
    const data = await response.json();

    return data.data.results;
}

/* 검색한 캐릭터 조회 */

/* 캐릭터별 이벤트 조회 */
export async function getCharacterDetail(id) {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${ id }/events?ts=${ ts }&apikey=${ PUBLIC_KEY }&hash=${ hash }`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.data.results)

    return data.data.results;

}
