import services from "./index"

describe('Test the services', () => {
  it('Validate getProducts', async () => {
    const mockResponse = [
      {
        "id": 1,
        "name": "Wings of Fire",
        "price": 400,
        "url": "/assets/wings.jpeg",
        "author": "APJ Abdul Kalam",
        "rating": 4.5,
        "numOfReview": 200,
        "description": "Wings of Fire is an autography of APJ Abdul Kalam covering his early life and his work in Indian space research and missile programs. It is the story of a boy from a humble background who went on to become a key player in Indian space research/Indian missile programs and later became the president of India.",
        "countAvailable": 2,
        "category": "Biography"
      }
    ]
    jest.spyOn(services, 'getProducts').mockResolvedValue(
      [
        {
          "id": 1,
          "name": "Wings of Fire",
          "price": 400,
          "url": "/assets/wings.jpeg",
          "author": "APJ Abdul Kalam",
          "rating": 4.5,
          "numOfReview": 200,
          "description": "Wings of Fire is an autography of APJ Abdul Kalam covering his early life and his work in Indian space research and missile programs. It is the story of a boy from a humble background who went on to become a key player in Indian space research/Indian missile programs and later became the president of India.",
          "countAvailable": 2,
          "category": "Biography"
        }
      ]
    )
    const books = await services.getProducts();
    expect(books).toEqual(mockResponse)
  })
})