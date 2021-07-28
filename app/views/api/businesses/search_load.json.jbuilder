json.businesses do 
    json.array! @businesses do |business|
        json.extract! business, :name, :id
    end
end

json.menu_items do 
    json.array! @menu_items do |menu_item|
        json.business_id menu_item.business.id
        json.extract! menu_item, :name, :id
    end
end

json.service_items do 
    json.array! @service_items do |service_item|
        json.business_id service_item.business.id
        json.extract! service_item, :name, :id
    end
end

json.services do 
    json.array! @services do |service|
        json.business_id service.business.id
        json.extract! service, :name, :id
    end
end

json.attribute_items do
    json.array! @attrs do |attribute_item|
        json.extract! attribute_item, :name, :id
    end
end