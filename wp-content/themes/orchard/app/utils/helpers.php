<?php

/**
 * Get acf image properties image by field name
 *
 * @param string $fieldName
 * @return array
 */
function get_field_image($fieldName = '') : array
{
    $image = !empty(get_field($fieldName, 'unique_id'))
            ? get_field($fieldName, 'unique_id')
            : null;
    
    return get_image_props($image);
}

/**
 * Get acf image by field
 *
 * @param string $field
 * @return array
 */
function get_image_by_field($field) : array
{
    $image = !empty($field)
            ? $field
            : null;
    
    return get_image_props($image);
}

/**
 * Get acf image properties
 *
 * @param string $image
 * @return array
 */
function get_image_props($image) : array
{
    $defaultImage = get_template_directory_uri() . '/assets/images/default.webp';

    return [
        'has_image' => isset($image['sizes']['medium']) ? true : false,
        'url' => $image['url'] ?? $defaultImage,
        'medium' => $image['sizes']['medium'] ?? $defaultImage,
        'large' => $image['sizes']['large'] ?? $defaultImage,
        'alt' => $image['alt'] ?? '',
    ];
}