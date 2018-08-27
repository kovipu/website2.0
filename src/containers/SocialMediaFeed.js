import React from 'react'
import { Tile, Box, Text, Section } from 'bloomer'

const feed = [
  {
    'page': {
      'cover': {
        'cover_id': '297794936963572',
        'offset_x': 48,
        'offset_y': 50,
        'source': 'https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/456243_297794936963572_1134109417_o.jpg?_nc_cat=0&oh=a642ab6efc0ae0ed6bfffa73ad8beee3&oe=5BFD0465',
        'id': '297794936963572'
      },
      'picture': {
        'data': {
          'height': 50,
          'is_silhouette': false,
          'url': 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/576441_297799126963153_1072541204_n.jpg?_nc_cat=0&oh=137b7a18ca7a5ec02ceeec89fe7f2548&oe=5C03F2BB',
          'width': 50
        }
      },
      'id': '136484973094570'
    },
    'posts': {
      'data': [
        {
          'id': '136484973094570_1754028528006865',
          'name': 'Digit ry - Ilmoittautumiset - 0-kerhon Kesänollaus',
          'description': '0-kerho, Digit ry:n vanhemmille opiskelijoille ja alumneille tarkoitettu kerho, järjestää Kesänollauksen Littoistenjärven kupeessa Villa Järvelässä. Ohjelmana on saunomista, paljuilua, uimista, grillaamista ja vapaamuotoista illanviettoa. Omat juomat mukaan.',
          'picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQCSKZiBFnSuzP8d&w=130&h=130&url=https%3A%2F%2Fwww.digit.fi%2Filmo%2Fimages%2Fpng%2Fgb.png&cfs=1&_nc_hash=AQDxbB2cbdgtlSCz',
          'full_picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQDfsYluOtF6o_a9&url=https%3A%2F%2Fwww.digit.fi%2Filmo%2Fimages%2Fpng%2Fgb.png&_nc_hash=AQChT1PFv7Hf-BzT',
          'created_time': '2018-07-26T16:45:35+0000'
        },
        {
          'id': '136484973094570_2170388606583527',
          'name': '0-kerhon Kesänollaus',
          'description': '0-kerho, Digit ry:n vanhemmille opiskelijoille ja alumneille tarkoitettu kerho, järjestää Kesänollauksen Littoistenjärven kupeessa Villa Järvelässä. Ohjelmana on saunomista, paljuilua, uimista, grillaamista ja vapaamuotoista illanviettoa. Omat juomat mukaan.\n\nAikataulu:\nTapahtuma alkaa 17.00\nPaikalta poistuttava viimeistään 23.30\n\nJärvelä sijaitsee pyöräilymatkan päässä Turun keskustasta osoitteessa Järveläntie 133. Julkisia liikennevälineitä suosiville bussilinja 2B lienee paras vaihtoehto ja omalla autollakin sopii toki saapua. Alla oleva karttalinkki helpottanee matkasuunnitelman tekemistä.\n\nhttps://goo.gl/maps/oDWNxp55VXx\n\nIlmoittautuminen tapahtumaan: \nhttps://www.digit.fi/enrol.php?v=event&id=934',
          'picture': 'https://scontent.xx.fbcdn.net/v/t1.0-0/c59.0.130.130/p130x130/37007079_1733088853434166_4628584575843434496_n.jpg?_nc_cat=0&oh=c2ec43c7ad9cdd9d86f0596556c1d937&oe=5BF9952E',
          'full_picture': 'https://scontent.xx.fbcdn.net/v/t1.0-9/c326.0.720.720/p720x720/37058024_1733088850100833_8703376128670171136_o.jpg?_nc_cat=0&oh=5d06141a67ddb56fb398f7438a561409&oe=5C3B7191',
          'created_time': '2018-07-13T07:41:34+0000'
        },
        {
          'id': '136484973094570_1651309674945418',
          'name': 'Digit ry - Ilmoittautumiset - Taiste-workshop: Hipsteriohjelmointia haskellilla',
          'description': 'Taisteen Hipsterohjelmointia Haskellilla -workshop järjestetään 15.5.! Päivämäärien vaihtumisten takia teimme kokonaan uuden ilmoittautumisen. Eli jos ilmoittauduit edellisellä kerralla workshoppiin, niin käy ilmoittautumassa uudestaan. Nyt on myös hyvä hetki ilmoittautua, jos et viime ke...',
          'picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQCSKZiBFnSuzP8d&w=130&h=130&url=https%3A%2F%2Fwww.digit.fi%2Filmo%2Fimages%2Fpng%2Fgb.png&cfs=1&_nc_hash=AQDxbB2cbdgtlSCz',
          'full_picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQDfsYluOtF6o_a9&url=https%3A%2F%2Fwww.digit.fi%2Filmo%2Fimages%2Fpng%2Fgb.png&_nc_hash=AQChT1PFv7Hf-BzT',
          'created_time': '2018-05-08T08:48:30+0000'
        },
        {
          'id': '136484973094570_1642422085834177',
          'created_time': '2018-04-29T14:43:27+0000'
        },
        {
          'id': '136484973094570_1630620293681023',
          'name': 'Sinustako opiskelijavaikuttaja TEKiin?',
          'description': 'Haluatko valtaa, verkostoja ja asiantuntemusta? Haluatko päästä vaikuttamaan valtakunnallisesti merkittävän ja vaikutusvaltaisen toimijan linjauksiin?',
          'picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQDdNct-91r-N1mf&w=130&h=130&url=https%3A%2F%2Fwww.tek.fi%2Fsites%2Fall%2Fthemes%2Fcustom%2Ftek%2Ftek-logo.svg&cfs=1&_nc_hash=AQAX1GOEN06MT56y',
          'full_picture': 'https://external.xx.fbcdn.net/safe_image.php?d=AQAGgg72wZg81ecH&url=https%3A%2F%2Fwww.tek.fi%2Fsites%2Fall%2Fthemes%2Fcustom%2Ftek%2Ftek-logo.svg&_nc_hash=AQAbVLRZ-Q4dO0oo',
          'created_time': '2018-04-17T11:56:39+0000'
        },
        {
          'id': '136484973094570_1629801170429602',
          'created_time': '2018-04-16T15:11:39+0000'
        }
      ],
      'paging': {
        'cursors': {
          'before': 'Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXhNelkwT0RRNU56TXdPVFExTnpBNkxUSTNNVGt6TkRBeU5Ea3hOVEUxT1RFeU5qUVBER0ZA3YVY5emRHOXllVjlwWkE4ZA01UTTJORGcwT1Rjek1EazBOVGN3WHpFM05UUXdNamcxTWpnd01EWTROalVQQkhScGJXVUdXMW42cndFPQZDZD',
          'after': 'Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXhNelkwT0RRNU56TXdPVFExTnpBNkxUZAzJNRFl3TmpZANU9EY3lOVEl6TlRVME9EQVBER0ZA3YVY5emRHOXllVjlwWkE4ZA01UTTJORGcwT1Rjek1EazBOVGN3WHpFMk1qazRNREV4TnpBME1qazJNRElQQkhScGJXVUdXdFM5S3dFPQZDZD'
        },
        'next': 'https://graph.facebook.com/v3.1/136484973094570/posts?access_token=EAADMyycz1kkBABw8XmQBn8CZCUXHsS2pS69GEEA9osn8ZCArU9D9lWse8C3i1ZABjNU05QZCPsLXjGYgyR7HLRsRQ2zEPx37ZAUQ3Nx50L9sn0ZCsr9aG2aVjtH7OMxFEC6AKwISFEpNRiKgWQg6kzq3oAKhEAXY4IvTHxeR2RRoWxTZB2BN8SuMmBuZBiS03JDusjbPcdQqUwZDZD&fields=id%2Cname%2Cdescription%2Cpicture%2Cfull_picture%2Cpermanent_url%2Ccreated_time&limit=6&after=Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXhNelkwT0RRNU56TXdPVFExTnpBNkxUZAzJNRFl3TmpZANU9EY3lOVEl6TlRVME9EQVBER0ZA3YVY5emRHOXllVjlwWkE4ZA01UTTJORGcwT1Rjek1EazBOVGN3WHpFMk1qazRNREV4TnpBME1qazJNRElQQkhScGJXVUdXdFM5S3dFPQZDZD'
      }
    }
  }
]

const SocialMediaFeed = () => {
  return (
    <Section className='pt-4'>
      <Tile isAncestor>
        <Tile isParent isSize={6} style={{ padding: 30 }}>
          <Tile
            isChild
            render={props => (
              <Box {...props}>
                <Text>Under construction</Text>
              </Box>
            )}
          />
        </Tile >
      </Tile>
    </Section>
  )
}

export default SocialMediaFeed
