import { delimList } from '../utils/delimList';
import { lowerCaseList } from '../utils/lowerCaseList';

const stopWordsList = [
  'got',
  'see',
  'say',
  'could',
  "it's",
  'need',
  'still',
  'back',
  'ill',
  'r',
  'thats',
  'ok',
  'well',
  'lot',
  'also',
  'gonna',
  'great',
  'want',
  'know',
  'dont',
  'yes',
  'going',
  'go',
  'think',
  "you're",
  'good',
  '',
  ' ',
  'lets',
  'u',
  'would',
  'like',
  'im',
  'ur',
  'get',
  'yeah',
  'cause',
  'i',
  'me',
  'my',
  'myself',
  'we',
  'our',
  'ours',
  'ourselves',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  'he',
  'him',
  'his',
  'himself',
  'she',
  'her',
  'hers',
  'herself',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'themselves',
  'what',
  'which',
  'who',
  'whom',
  'this',
  'that',
  'these',
  'those',
  'am',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'a',
  'an',
  'the',
  'and',
  'but',
  'if',
  'or',
  'because',
  'as',
  'until',
  'while',
  'of',
  'at',
  'by',
  'for',
  'with',
  'about',
  'against',
  'between',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'to',
  'from',
  'up',
  'down',
  'in',
  'out',
  'on',
  'off',
  'over',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'id',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'can',
  'will',
  'just',
  'don',
  'should',
  'now',
  'much',
  'it’s',
  'you’re',
  'can’t',
  'I’m',
  'wanna',
  'w',
  'w/',
  'ive',
  'actually',
  'I’m',
  'way',
  '“I',
  'really',
  'might',
  'make',
  'time',
  'oh',
  'around',
  'right',
  "i'll",
  "i'm",
  'one',
  'don’t',
  'people',
  'I’ll',
  'that’s',
  'take',
  'even',
  'us',
  "don't",
  "that's",
  "she's",
  '”', // very weird quote, not sure what this is
];
export const stopWords = delimList(lowerCaseList(stopWordsList));
