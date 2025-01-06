let recommendedLoveComedy = [];
let recommendedSF = [];
let recommendedFantasy = [];

function getRandomAnime(animeList, recommendedList) {
    
    if (recommendedList.length === animeList.length) {
        recommendedList.length = 0;
    }

    
    let filteredAnimes = animeList.filter(anime => !recommendedList.includes(anime));
    const randomIndex = Math.floor(Math.random() * filteredAnimes.length);
    const selectedAnime = filteredAnimes[randomIndex];

    
    recommendedList.push(selectedAnime);

    return selectedAnime;
}
 
function showRecommendation() {
    const genres = document.querySelectorAll('input[name="genre"]:checked');
    let selectedGenres = Array.from(genres).map(genre => genre.value);
    let animeImage = document.getElementById("animeImage");
    let animeDescription = document.getElementById("animeDescription");

    const loveComedyAnimes = [
        { src: 'https://i.namu.wiki/i/HKzQTUkpGZEKR5JFtQ05N8La6uJVcDYHU_MRr_Gk3l3ZPF375gcQoCK4vrfWWkUJ14O84IzUq2FVw3GkmUChKQ.webp', 
            desc: ' "너에게 닿기를" 전체적인 줄거리는 어딘가 음침한 외형이나 분위기 때문에 공포영화 귀신 사다코라는 별명으로 모두의 기피대상인 여주인공 쿠로누마 사와코와 그녀와 모든 것이 정반대인 잘나가는 남학생 카제하야 쇼타가 우연히 만나 가까워지게 되는 것이지만 여기에 친구들과의 우정문제와 요시다 치즈루와 사나다 류 커플과 야노 아야네와 아라이 카즈이치 커플들의 이야기까지 부각되면서 그냥 흔하디 흔한 순정 성장물 청춘물이라고 봐도 좋다.[3] 00년 후반기 최고의 치유계. 보고 있으면 어느새 마음이 정화되는 것을 느낄 수 있다.' },
        { src: 'https://i.namu.wiki/i/ffBGsrzGkKbHuboIOy2RnwQJCHaVAnICNhhl-Abr8addtja7CZBPIqvCczOBkFJZJ5e72OuHB_8yXUm01FAoFA.webp', 
            desc: ' "내 마음의 위험한 녀석" 이치카와 쿄타로는 살인에 관련된 엽기적인 책들을 읽는 걸 즐기는,중증의 중2병을 가진 남자애였다.같은 반의 미소녀 야마다 안나를 힐끔힐끔 보면서위험한 망상을 하고는 했는데, 그러던 어느 날.야마다가 이치카와의 성역인 도서실에 찾아왔다.야마다는 혼자 있다고 생각했는지 입 안이 가득해질 정도로 주먹밥을 먹는다든지,이상한 콧노래를 부른다든지 하는 등 마음 가는 대로 행동했다.그렇게 예측 불가능한 행동을 반복하는 모습을 보자니이치카와는 점점 눈을 뗄 수 없게 되었는데.' },
            { src: 'https://i.namu.wiki/i/xIwhaoAmZ4FBnhErA2c9VA9o0ovTMGTsocjp60w5LmVtXffJQTnxqo5AAEezja8ABCOUqZHMWqFO6SZfVV915w.webp',
                desc: ' "사쿠라장의 애완 그녀" 내가 사는 기숙사『사쿠라장』은 학원 괴짜들의 집단. 이런 기숙사에 전학 오자마자 들어온 시이나 마시로는 귀엽고 청초한데다 세계적으로 유명한 천재화가라고 한다 천재 미소녀를 기숙사 괴짜들로부터 지켜내야 돼!라고 분발했지만, 입사 다음날 무시무시한 사실이 발각됐다. 마시로는 밖에만 나갔다 하면 길을 잃고 방은 돼지우리, 팬티조차도 직접 고르지 못하는데다 입지도 못하는 생활 파탄 소녀였던 것이다!이런 마시로의 담당으로 임명된 나. 잠깐, 옷을 나보고 갈아입히라고?! 이래 봬도 난 건강한 남자 고등학생이거든?! 변태와 천재와 평범한 사람들이 만들어내는 청춘학원 러브 코미디 등장!!'}
           ,{ src: 'https://i.namu.wiki/i/N10QIdzDrT4IZXGp3CIical_5yeIiyOOD0ymXGUIYbN3ZOmP5aCCFvW9NwHyTp-FGShruf0Yh_4HCFohwCqNyw.webp',
                desc: ' "가끔 러시아어로 부끄러워하는 옆자리 아랴양" 내 옆자리에 앉은 절세의 은발 미소녀, 아랴 양은 의기양양한 미소를 지었다.하지만, 사실은 다르다.방금 그녀가 말한 러시아어는 【나도 좀 신경 써줘】란 의미다!실은 나, 쿠제 마사치카의 러시아어 리스닝은 원어민 레벨이다.그런 줄도 모르고, 오늘도 달콤한 러시아어로 애교 부리는 아랴 양 때문에 입가가 쉴 새 없이 실룩거리는데?! 전교생이 동경하는 초 하이스펙 러시안 여고생과의 청춘 러브 코미디!' },
           { src: 'https://i.namu.wiki/i/eFX8is7TsJNIulAHSNS4gDqTK95ctzEElHA640dGG5Qq-h6fl7exNyGdhB8gjzbNgpGVx8QhpCmg10WT13RzSg.webp',
                desc: ' "선배가 짜증하는 후배 이야기" 작은 체구와 어려 보이는 외모에 콤플렉스가 있는, 매사 자존심 강한 신입 직장인 이가라시. 그런 그녀는 덩치가 크고 거칠어 보이는 외모지만 의외로 자상하게 자신을 챙기는 직장 선배 타케다의 행동 하나하나에 애 취급당하는 것 같아 짜증을 내기만 한다.하지만 내심 그런 보살핌이 싫지만은 않아 버럭 화내고 투덜대면서도 세심한 구석 없는 선배를 챙겨주다 어느새 조금씩 두 사람의 관계는 미묘하게 가까워지는데~! 그런 두 사람을 은근히 응원하는 동료 카자마와 사쿠라이. 조금은 어른스러운(?) 카자마와 사쿠라이 사이에 펼쳐지는 핑크빛 썸 이야기도 흥미진진한, 공감 100% 직장 러브 코미디!' }
       ];
   
    

    const sfAnimes = [
        { src: 'https://i.namu.wiki/i/XoacQbSQgN2U0MOjCJrHd8aDcPWfhVwFTozYuJu-EI_20CbmkzbDRcvLMsVRPQbBOL4CIumNlcJYERq2HiyKhA.webp',
             desc: ' "은혼" 에도는 지금 갑자기 하늘에서 내려온 천인의 대두와 폐도령으로 인해 사무라이가 쇠퇴일로를 걷고 있다. 그러나 사무라이 정신을 굳게 간직한 남자가 있었으니 그의 이름은 사카타 긴토키. 단것을 좋아하는 저돌적인 이 남자가 부패한 에도를 두동강을 낼지도?!' },
        { src: 'https://i.namu.wiki/i/QVDLDZFP8ZmrYtBDuwCSidAIJt22yjAwAM0dmB7j4fm6sc6SBafektPlsXO1lBgIT74ms5roGu5pN1LjwgEtjA.webp',
             desc: ' "사이키쿠스오의 재난" 여느 학생들처럼 평범..하기는 개뿔! 태어나자마자 말을 하고 1달만에 하늘걷기를 마스터한데다 오만 초능력을 가진 고등학생 사이키 쿠스오! 그는 이 능력을 정말 싫어해서 항상 평범하게 사는 게 목표인 소년이다. 그런데 학교 내에 그를 추종하는 2인방과 짝사랑녀 2인조때문에 무난한 삶을 살려는 사이키의 목표가 뿌리째 흔들리는데...' },
             { src: 'https://i.namu.wiki/i/0tUnfPHJTXknY4SpYFg0JEqZ4XnI5meEkOw0aSx_6fdnKxkBXAvitUL3gwT9vX251xnwnPRV3KQqNbpyZD2sIg.webp',
                desc: ' "마왕성에서 잘 자요" 일찍이, 아직 사람들이 마법을 쓰고, 사람과 악마가 공존했던 시대. 땅 속에서 마왕이 나타나 세상의 안정을 어지럽히곤 했다."인간 세상의 공주를 받아가겠다! 돌려받고 싶으면 이 세상의 지배권을 모두 악마들에게 넘겨라!"그 말에 온 나라가 분노하고, 슬픔에 빠져……공주를 걱정했다. 마족이 사는 성에서, 공주는 울고, 절망하고, 도움을 청할……터였지만, 마왕성에 납치된 공주에겐 고민이 있었다. 그 고민은 인간의 근원으로 다가왔고, 여기서 도망칠 궁리나, 놔두고 온 국민에 대해서 같은 건 이미 사소한 일…… "아아…… 보다 편하게 잠드는 방법을 알고 싶어."' },
           { src: 'https://i.namu.wiki/i/iDjj7hRfDbp78k0XYmkqWtg5Hq5aa_uF0LTk3SiWzoZ5Rux01keM6VOtcD3QpIjH8KkLdhygVDejl54gnhkm4Q.webp',
                desc: ' "사카모토 입니다만?" 스타일리시한 등교, 화려한 지각 회피, 스마트한 런치 타임…사카모토, 그의 엣지 넘치는 행동거지 하나하나가 여학생들의 마음을 두근거리게 만든다. 이런 사카모토가 꼴 보기 싫은 학교 일진들은 그를 골탕먹이려 하지만, 어느새 그의 쿨-함에 교화되고 동성애의 눈마저 뜨고 마는데..!' },
           { src: 'https://i.namu.wiki/i/u2Q-GHH8Ytz6aX8owiKbCgCcCE_aRJMXnV1ClEgBpq5CwR9XFekwe5qt4u5rCp-BOfasHyCQTJWlsyvH_iPksw.webp',
                desc: ' "즐겁게 놀아보세" 어릴 적부터 언니와의 내기에 지기만 해서 심부름을 하면서 자란 노무라 카스미는 공부를 해도 오르지 않는 영어 점수에 고민한다. 그러던 중, 급우이자 학교의 미국인 학생인 올리비아와 혼다 하나코가 참참참을 하는 모습을 보다 미국인인 올리비아에게 영어를 배울 속셈으로 그들과 엮이면서 둘과 함께 여러가지 놀이를 체험하게 된다.' }
       ];
   

    const fantasyAnimes = [
        { src: 'https://i.namu.wiki/i/G3-fMHIGqReTd0o7UGK3s0JgRVxX6EGektN-ivCaT8LAuzEsplymCydxbaYPb0Wc1gRz03Ej5rEkaQdGQCazDw.webp',
             desc: ' "달이 이끄는 이세계 여행" 부모의 사정으로 이세계에 용사로서 소환될 운명인 고교생 미스미 마코토. 그런 마코토를 이세계의 신에게 인도하는 일을 맡은 츠쿠요미 덕에 이런저런 사정을 듣게되고 치트 능력도 받아 각오를 다지고 소환되었지만, 정작 미코토를 소환한 이세계의 여신은 "뭐야? 못생겼잖아! 내 취향이 아니니까 꺼져"라며 세상의 끝, 황야의 땅으로 날려버린다.' },
        { src: 'https://i.namu.wiki/i/mBMeJzitWh0zQcSfxUqf3emnhk_w7EWwJrHaO3Wo2ubOFE6yFMEgxL_o9iy1S3QlLDWAg_yR2xHOuqv5Rymfzw.webp',
             desc: ' "이누야샤" 현대의 중학생 유가영이 우물을 통해 전국시대로 시간을 이동하게 된다. 그 시대를 사는 반요(개 요괴) 이누야샤를 만나 모험을 펼치게 된다. 사혼의 구슬조각을 모으려 돌아다니며 숙적인 나락을 물리치러 하는 여행 스토리' },
             { src: 'https://i.namu.wiki/i/yjjlKRzjT-avgTKBtI5Qy8dGN5Xyj48M8tHdRn60wUCL282KfODj9wQXgRe_TDwWQeQkOnLZ3mqz5hGSxGibLw.webp',
                desc: ' "무직전생" 스스로를 후회하던 순간, 그는 트럭에 치일 뻔한 학생을 구하고 어이없이 죽었다. 그리고 눈을 뜬 곳은─ 바로 검과 마법의 이세계였다!!루데우스라는 이름이 붙은 아기로 다시 태어난 그는, “이번에야말로, 진지하게 살아주겠어!”라며 후회 없는 인생을 보내기로 결심한다.전생의 지식을 살린 루데우스는 스승을 만나 순식간에 마술 재능을 꽃피우고 어린 여자아이의 가정교사를 맡게 된다. 또한 엘프 귀를 가진 소꿉친구와 만나며, 그의 새로운 인생이 점차 움직이기 시작한다. 동경의 인생 재시작형 전생 판타지, 여기서 시동!' },
           { src: 'https://an2-img.amz.wtchn.net/image/v2/O9HBDa3za0j6932esbS6fg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU1EazBPVEF6TnpneU5qYzJOVEEyTXlKOS5XaE4zMDRNUzBRc0NLUUxISGJqS1lMTThJbFg5NXljU1E2ZFVfYl9UT3lJ',
                desc: ' "일곱개의 대죄" 브리타니아에 위치한 리오네스 왕국의 전복을 계획한 것으로 알려진 전설적인 기사단 "일곱 개의 대죄"는 왕국 성기사들에게 당해 행방불명으로 사라졌다. 그로부터 10년, 리오네스 왕국의 성기사들은 스스로 힘을 키워 왕을 구속하고 학대와 폭정을 일삼는다. 그 와중에 살아남은 왕국의 셋째 공주 엘리자베스는 일곱 개의 대죄라는 최악이자 최강의 원군을 찾기 위해 여행을 나선다.' },
           { src: 'https://i.namu.wiki/i/l0ciedax8hxQVJYRkDZQZqJ65V0U7IkJI1K4L9y7TqWwaeayZnBpl8aUScJS8GPzcfY8wfxZ_SOV7HexsQx78w.webp',
                desc: ' "전생했더니 슬라임이었던 건에 대하여" 어느날 갑자기 나타난 괴한에게 습격당해 목숨을 잃은 미카미 사토루는,천문학적 확률로 이세계에 전생한다.그러나 왜인지 전생한 모습은,최약체 몬스터로 유명한 슬라임이었다!「이런 건 인정 못 해?!」 라고 말하면서도,낯선 동굴에서 즐거운 슬라임 라이프를 만끽하지만..천재급 드래곤 『폭풍룡 베루도라』와 만남으로써,운명의 수레바퀴는 움직이기 시작했다! 몬스터 전생 판타지, 시작!' }
       ];

    if (selectedGenres.includes('러브코미디')) {
        const randomAnime = getRandomAnime(loveComedyAnimes, recommendedLoveComedy);
        animeImage.src = randomAnime.src;
        animeDescription.textContent = randomAnime.desc;
    } else if (selectedGenres.includes('코미디')) {
        const randomAnime = getRandomAnime(sfAnimes, recommendedSF);
        animeImage.src = randomAnime.src;
        animeDescription.textContent = randomAnime.desc;
    } else if (selectedGenres.includes('판타지')) {
        const randomAnime = getRandomAnime(fantasyAnimes, recommendedFantasy);
        animeImage.src = randomAnime.src;
        animeDescription.textContent = randomAnime.desc;
    } else {
        animeImage.src = "";
        animeDescription.textContent = "장르를 선택해주세요.";
    }

    document.getElementById("recommendation").classList.remove("hidden");
}
