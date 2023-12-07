/***
 * @typedef {Object} CartProduct
 * @property {number} id - Идентификатор продукта в корзине.
 * @property {number} count - Количество данного продукта в корзине.
 * @property {number} quantity - Количество данного продукта в наличии.
 * @property {number} change - Изменение количества продукта в корзине.
 * @property {string} product_name - Название продукта.
 * @property {string} product_image - URL изображения продукта.
 * @property {Array<string>} attribute_sku - Атрибуты SKU продукта.
 * @property {Array<string>} attribute_product - Атрибуты продукта.
 * @property {string} subcategory - Название подкатегории продукта.
 * @property {boolean} is_site_visible - Флаг видимости продукта на сайте.
 * @property {number} product_price - Цена продукта.
 * @property {number} iherb_price - Цена на iHerb (или альтернативная цена).
 * @property {string} product_name_slug - Название продукта в формате slug.
 * @property {number} product_id - Идентификатор продукта.
 * @property {number} discount - Скидка на продукт (в процентах).
 * @property {number} final_price - Итоговая цена продукта после применения скидки.
 * @property {number} product_price_rub - Цена продукта в рублях.
 * @property {number} manufacturer_id - Идентификатор производителя продукта.
 * @property {number} category_id - Идентификатор категории продукта.
 * @property {number} cart_product_id - Идентификатор продукта в корзине.
 */
/**
 * Массив объектов, представляющих продукты в корзине.
 *
 * @type {CartProduct[]}
 */
