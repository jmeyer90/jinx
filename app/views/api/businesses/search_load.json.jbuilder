json.businesses do 
    json.array! @businesses do |business|
        json.set! business.id do
            json.extract! business, :name
        end
    end
end

json.menu_items do 
    json.array! @menu_items do |menu_item|
        json.set! menu_item.id do
            json.business_id, menu_item.business.id
            json.extract! menu_item, :name
        end
    end
end

json.service_items do 
    json.array! @service_items do |service_item|
        json.set! service_item.id do
            json.business_id, service_item.business.id
            json.extract! service_item, :name
        end
    end
end


json.services do 
    json.array! @services do |service|
        json.set! service.id do
            json.business_id, service.business.id
            json.extract! service, :name
        end
    end
end

json.attribute_items do
    json.array! @attrs do |attribute_item|
        json.set! attribute_item.id do
            json.extract! attribute_item, :name
        end
    end
end