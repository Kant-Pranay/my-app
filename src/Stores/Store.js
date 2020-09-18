export function createStore() {
    return {
        count: 0,
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        time: new Date().toLocaleString(),
        tick() {
            this.time = new Date().toLocaleString()
        },
        isLoading: true,
        persons: [],
        randomurl: "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole",
        from_currency: "",
        to_currency: "",
        input_currency: "",
        output_currency: "",
        currencyURL() {
            return `https://free.currconv.com/api/v7/convert?q=${this.from_currency}_${this.to_currency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
        },
        list: [
            { "currency": "XCD", "name": "East Caribbean dollar", "symbol": "$" },
            { "currency": "EUR", "name": "European euro", "symbol": "€" },
            { "currency": "GEL", "name": "Georgian lari", "symbol": "₾" },
            { "currency": "HTG", "name": "Haitian gourde", "symbol": "G" },
            { "currency": "INR", "name": "Indian rupee", "symbol": "₹" },
            { "currency": "ILS", "name": "Israeli new sheqel", "symbol": "₪" },
            { "currency": "KZT", "name": "Kazakhstani tenge", "symbol": "лв" },
            { "currency": "KWD", "name": "Kuwaiti dinar", "symbol": "د.ك" },
            { "currency": "LSL", "name": "Lesotho loti", "symbol": "L" },
            { "currency": "USD", "name": "U.S. Dollar", "symbol": "$" }
        ],
    }
}