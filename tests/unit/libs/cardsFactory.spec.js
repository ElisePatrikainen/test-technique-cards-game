import { createCard, createCards } from '../../../src/libs/cardsFactory.js'

describe('create a card', () => {
    it('creates a number card', () => {
        const card = createCard('carreau', 3)
        expect(card).toHaveProperty('color', 'carreau')
        expect(card).toHaveProperty('value', 4)
    })
    it('creates a figure card', () => {
        const figureCard = createCard('pique', 10)
        expect(figureCard).toHaveProperty('color', 'pique')
        expect(figureCard).toHaveProperty('value', 'valet')
    })
  })


describe('it should create a cards set, and add a set index to each card', () => {
    const cards = createCards()
    // todo: split 'it'
    it('creates a number card', () => {
        expect(cards.length).toBe(52)
        expect(cards[17]).toHaveProperty('index', 17)
        const diamondCards = cards.filter(card => card.color === 'carreau')
        expect(diamondCards.length).toBe(13)
        const kingCards = cards.filter(card => card.value === 'roi')
        expect(kingCards.length).toBe(4)
    })
})