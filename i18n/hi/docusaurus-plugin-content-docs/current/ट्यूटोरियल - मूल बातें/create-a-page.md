---
साइडबार_पोजिशन: 1
---

# पृष्ठ बनाएँ

**स्टैंडअलोन पेज** बनाने के लिए **मार्कडाउन या रिएक्ट** फाइलों को `src/pages` में जोड़ें:

- `src/pages/index.js` → `लोकलहोस्ट: 3000/`
- `src/pages/foo.md` → `लोकलहोस्ट: 3000/foo`
- `src/pages/foo/bar.js` → `लोकलहोस्ट: 3000/foo/bar`

## अपना पहला रिएक्ट पेज बनाएं

`src/pages/my-react-page.js` पर एक फाइल बनाएं:

```jsx शीर्षक = "src/pages/my-react-page.js"
'प्रतिक्रिया' से आयात प्रतिक्रिया;
'@ थीम/लेआउट' से लेआउट आयात करें;

निर्यात डिफ़ॉल्ट फ़ंक्शन MyReactPage () {
  वापसी (
    <लेआउट>
      <h1>मेरा प्रतिक्रिया पृष्ठ</h1>
      <p>यह एक प्रतिक्रिया पृष्ठ है</p>
    </लेआउट>
  );
}
```

एक नया पेज अब [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) पर उपलब्ध है।

## अपना पहला मार्कडाउन पेज बनाएं

`src/pages/my-markdown-page.md` पर एक फाइल बनाएं:

`` mdx शीर्षक = "src/पृष्ठ/my-markdown-page.md"
#माई मार्कडाउन पेज

यह एक मार्कडाउन पेज है
```

एक नया पेज अब [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) पर उपलब्ध है।