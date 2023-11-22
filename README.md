# challenge-mid-react-native

## Obiettivo

Questa challenge consiste nel costruire il prototipo di un package che fornisce il componente
`CachedNetworkImage`.
Come fa intendere il nome, questo componente agirà in modo simile al componente `<Image>`, con la differenza che una volta ottenuto il contenuto dell'immagine, questo
verrà salvato localmente nel dispositivo dell'utente, quindi nei successivi utilizzi *della stessa URI* non sarà necessario eseguire ulteriori richieste HTTP per recuperarlo.

Questo progetto utilizza il package `react-native-builder-bob` per facilitare lo sviluppo, puoi
leggere `/package.json` o `/example/package.json` per capire come eseguire eseguire la build della libreria o avviare il progetto di esempio.

Ci aspettiamo una gestione dei TTL (Time to live) delle immagini specificato a livello globale (default 12 minuti), quindi la libreria durante il controllo dell'esistenza della risorsa nel dispositivo locale, dovrà tenere conto di questo parametro. Starà a te decidere come memorizzare i metadati legati ad ogni immagine.
**Hai pieno accesso ad internet**, dunque puoi scegliere librerie third-party, tranne quelle che provvedono un cache manager.

Inoltre, mostrando l'immagine, ci piacerebbe vedere una sorta di animazione fade-in.

E' già stata definita una interfaccia che rappresenta i `props` ricevuti da `CachedNetworkImage`:
```typescript
interface CachedNetworkImageProps {
  styles?: StyleProp<ImageStyle>;
  resolver?: IResourceResolver;
  url: string;
}
```
Se pensi che questa definizione non sia ottimale, discutiamone.

Durante la richiesta HTTP per recuperare l'immagine, dovrai tenere conto della proprietà `resolver`. Se non è stato definito un resolver, dovrai utilizzare il resolver di default `SimpleResourceResolver`.
Una classe che implementa l'interfaccia `IResourceResolver` si occupa di restituire il contenuto dell'immagine e siccome il candidato potrebbe avere necessità di scrivere unit test, questa interfaccia gli permetterà di passare un resolver mock per creare risposte simulate.

## Risultato finale

Una volta completata la challenge, ci aspettiamo di poter utilizzare il tuo componente
in `example/` nel seguente modo:

```tsx
import React from 'react';
...

import { CachedNetworkImage } from 'cached-network-image';

export default function App() {
  const galleryPictures = useGalleryPictures(getGalleryPictures);

  return (
    <View style={styles.container}>
      <Header title={'React Native Challenge'} />
      <View style={styles.gallery_wrapper}>
        {galleryPictures.map(item => (
          <View key={item.id} style={styles.item_wrapper}>
            <CachedNetworkImage style={styles.image} source={item.url} />
            <View style={styles.title_wrapper}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
```

## Valutazione

Saranno valutate principalmente la capacità del candidato di organizzare il codice in modo flessibile e la qualità del codice prodotto.
