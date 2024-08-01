/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722493462", {
    template: `
    <section id="cta-component" style="min-height: 470px"   class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 relative overflow-hidden">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-xl p-8 shadow-xl">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Unleash Your Coding Potential</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg">Master software development with our interactive learning platform.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-20 hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 backdrop-filter backdrop-blur-sm transition-all duration-300 ease-in-out">Start Learning Today</a>
                </div>

                <form class="mt-8 text-left">
                    <div class="mb-4">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio text-purple-600" name="radio-option" value="option1">
                            <span class="ml-2 text-white">Option 1</span>
                        </label>
                    </div>
                    <div class="mb-4">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio text-purple-600" name="radio-option" value="option2">
                            <span class="ml-2 text-white">Option 2</span>
                        </label>
                    </div>
                    <div class="flex justify-between mt-6">
                        <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                        <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-50 blur-3xl"></div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
